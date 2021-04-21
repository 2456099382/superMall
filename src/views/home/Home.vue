<template>
  <div id="home">
    <header class="head">
      <home-nav-bar class="nav-home-r"></home-nav-bar>
    </header>
    <tab-content
      ref="tabContent1"
      class="tab-content"
      @tabClick="tabClick"
      :titles="['流行', '新款', '精选']"
      v-show="tabContentIsShow"
    ></tab-content>
    <scroll
      ref="scroll"
      :probeType="3"
      :pullUpLoad="true"
      @scroll="scrolling"
      @pullend="pullend"
    >
      <home-swiper
        :banners="banners"
        @swiperImgLoad="swiperImgLoad"
        ref="swiper"
      ></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <population-in-week></population-in-week>
      <tab-content
        @tabClick="tabClick"
        :titles="['流行', '新款', '精选']"
        ref="tabContent2"
      ></tab-content>
      <goods-list :goodsList="goods[currentType].list" />
    </scroll>
    <back-top @click.native="backTop" v-show="scrollIsShwo" />
  </div>
</template>
</div>


<script>
import Swiper from "components/common/swiper/Swiper";
import TabContent from "components/content/tabContent/TabContent";
import GoodsList from "components/content/goodsList/GoodsList";
import Scroll from "components/common/scroll/scroll";
import BackTop from "components/content/backTop/BackTop";

import RecommendView from "./childrens/RecommendView";
import PopulationInWeek from "./childrens/PopulationInWeek";
import HomeNavBar from "./childrens/HomeNavBar";
import HomeSwiper from "./childrens/HomeSwiper";
/**
 * 网络请求
 */
import { getHomeMultidata, getHomeGoods } from "network/home";

import { debunce } from "common/utils";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      currentType: "pop",
      scrollIsShwo: false,
      tabContentIsShow: false,
    };
  },
  components: {
    RecommendView,
    Swiper,
    PopulationInWeek,
    HomeNavBar,
    HomeSwiper,
    TabContent,
    GoodsList,
    Scroll,
    BackTop,
  },
  created() {
    this.getHome();
  },
  mounted() {
    const refresh = debunce(this.$refs.scroll.scrollRefresh, 500);

    this.$bus.$on("imgLoad", () => {
      if (this.$route.path.indexOf("/home") != -1) {
        refresh();
      }
    });
  },
  methods: {
    /**
     * 网络请求
     */
    getHome() {
      getHomeMultidata().then((res) => {
        this.banners = res.banner.list;
        this.recommends = res.recommend.list;
      });

      this.getHomeGoods({
        type: "pop",
        page: ++this.goods.pop.page,
      });

      this.getHomeGoods({
        type: "new",
        page: ++this.goods.new.page,
      });

      this.getHomeGoods({
        type: "sell",
        page: ++this.goods.sell.page,
      });
    },
    getHomeGoods(params) {
      getHomeGoods(params).then((res) => {
        this.goods[params.type].list.push(...res.list);
      });
    },
    /**
     * 事件相关
     */
    swiperImgLoad() {
      this.$refs.tabContent2.tabContentTop = this.$refs.tabContent2.$el.offsetTop;
      // console.log(this.$refs.tabContent2.$el.offsetTop);
    },

    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabContent2.currentIndex = this.$refs.tabContent1.currentIndex = index;
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    scrolling(position) {
      this.scrollIsShwo = Math.abs(position.y) > 1000;

      this.tabContentIsShow =
        Math.abs(position.y) > this.$refs.tabContent2.tabContentTop;
    },
    pullend() {
      this.getHomeGoods({
        type: this.currentType,
        page: ++this.goods[this.currentType].page,
      });
    },
  },
};
</script>

<style scoped>
.tab-content {
  position: relative;
  top: 43px;
}
</style>
