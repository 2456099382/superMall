<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-bar"
      @titleClick="titleClick"
      ref="titleBar"
    />
    <scroll
      ref="scroll"
      :probeType="3"
      :pullUpLoad="true"
      @scroll="scrolling"
      :bottom="'49px'"
    >
      <detail-swiper :topImgs="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shopInfo="business" />
      <detail-info :detailInfo="detailInfo" @detailImgLoad="detailImgLoad" />
      <detail-params-info :detailParamsInfo="itemParams" ref="params" />
      <detail-comment-info :commentInfo="commentInfo" ref="comment" />
      <detail-recommend-info :recommendInfo="recommendInfo" ref="recommend" />
    </scroll>
    <back-top v-show="isBackTopShow" @click.native="backTop" />
    <detail-bottom-bar @addCart="addToCart" />
  </div>
</template>

<script>
import DetailSwiper from "./children/DetailSwiper";
import DetailBaseInfo from "./children/DetailBaseInfo";
import DetailShopInfo from "./children/DetailShopInfo";
import DetailInfo from "./children/DetailInfo";
import DetailParamsInfo from "./children/DetailParamsInfo.vue";
import DetailNavBar from "./children/DetailNavBar";
import Scroll from "components/common/scroll/scroll";
import DetailCommentInfo from "./children/DetailCommentInfo";
import DetailRecommendInfo from "./children/DetailRecommendInfo";
import DetailBottomBar from "./children/DetailBottomBar";

import { debunce } from "common/utils";
import { backTopShow } from "common/mixin";
import {
  getDetailData,
  getRecommend,
  Goods,
  Business,
  CommentInfo
} from "network/detail";

export default {
  name: "Detail",
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailBottomBar
  },
  mixins: [backTopShow],
  data() {
    return {
      iid: 0,
      res: null,
      topImages: [],
      goods: {},
      business: {},
      detailInfo: {
        desc: "",
        key: "",
        list: []
      },
      itemParams: {
        info: [],
        rule: []
      },
      commentInfo: {},
      recommendInfo: [],
      themesY: [],
      titleDebunce: null,
      scrollDebunce: null,
      isScroll: true
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetailData(this.iid)
      .then(res => {
        this.res = res;
        this.topImages = res.result.itemInfo.topImages;

        const result = res.result;
        console.log(result);
        // 基本商品信息
        this.goods = new Goods(
          result.columns,
          result.itemInfo,
          result.shopInfo.services
        );

        //商家信息
        this.business = new Business(result.shopInfo, result.shopInfo.score);

        // 详情信息
        this.detailInfo.desc = result.detailInfo.desc;
        this.detailInfo.key = result.detailInfo.detailImage[0].key;
        this.detailInfo.list = result.detailInfo.detailImage[0].list;

        // 参数的信息
        this.itemParams.info = result.itemParams.info.set;
        this.itemParams.rule = result.itemParams.rule.tables[0];

        // 评论信息
        if (result.rate.list) {
          this.commentInfo = new CommentInfo(result.rate.list[0]);
        }
        //商品推荐信息
        getRecommend()
          .then(result => {
            this.recommendInfo = result.list;
          })
          .catch(err => {
            throw err;
          });

        this.$bus.$emit("enterDetail");
      })
      .catch(err => {
        throw err;
      });
  },
  mounted() {
    this.callback = debunce(this.$refs.scroll.scrollRefresh, 500);

    this.titleDebunce = debunce(() => {
      this.themesY = [];

      this.themesY.push(0);
      this.$refs.params && this.themesY.push(this.$refs.params.$el.offsetTop);
      this.$refs.comment && this.themesY.push(this.$refs.comment.$el.offsetTop);
      this.$refs.recommend &&
        this.themesY.push(this.$refs.recommend.$el.offsetTop);
    }, 300);

    this.scrollDebunce = debunce(position => {
      if (this.isScroll) {
        this.themesY.forEach((item, index) => {
          if (Math.abs(position[0].y) > item) {
            this.$refs.titleBar && (this.$refs.titleBar.currentIndex = index);
          }
        });
      }
    }, 10);
  },
  methods: {
    detailImgLoad() {
      this.callback && this.callback();
      this.titleDebunce && this.titleDebunce();
    },
    titleClick(index) {
      const time = 300;
      this.$refs.scroll.scrollTo(0, -this.themesY[index], time);

      this.isScroll = false;
      setTimeout(() => {
        this.isScroll = true;
      }, time + 50);
    },
    scrolling(position) {
      this.scrollDebunce(position);

      this.listerBackTop(position);
    },
    addToCart() {
      const product = {};

      product.desc = this.goods.desc;
      product.img = this.topImages[0];
      product.title = this.goods.title;
      product.price = this.goods.oldPrice;
      product.iid = this.goods.iid;
      product.checked = false;

      this.$store.dispatch("addCart", product);
    }
  },
  destroyed() {
    this.$bus.$emit("leaveDetail");
  }
};
</script>

<style scoped>
.detail-bar {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;

  width: 100%;
  background-color: #fff;
}
</style>
