<template>
  <div id="home">
    <header class="head">
      <home-nav-bar></home-nav-bar>
    </header>
    <scroll>
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <population-in-week></population-in-week>
      <tab-content :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-content>
      <goods-list :goodsList="goods[currentType].list" />
    </scroll>

  </div>
</template>
</div>


<script>
  import Swiper from 'components/common/swiper/Swiper';
  import TabContent from 'components/content/tabContent/TabContent';
  import GoodsList from 'components/content/goodsList/GoodsList';
  import Scroll from 'components/common/scroll/scroll';


  import RecommendView from './childrens/RecommendView';
  import PopulationInWeek from './childrens/PopulationInWeek';
  import HomeNavBar from './childrens/HomeNavBar'
  import HomeSwiper from './childrens/HomeSwiper';


  import {
    getHomeMultidata,
    getHomeGoods
  } from "network/home";

  export default {
    name: "Home",
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          pop: {
            page: 0,
            list: []
          },
          new: {
            page: 0,
            list: []
          },
          sell: {
            page: 0,
            list: []
          }
        },
        currentType: 'pop'
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
      Scroll
    },
    created() {
      this.getHome();
    },
    mounted() {},
    methods: {
      getHome() {
        getHomeMultidata().then(res => {
          this.banners = res.banner.list;
          this.recommends = res.recommend.list;
        });

        this.getHomeGoods({
          type: 'pop',
          page: ++this.goods.pop.page
        })

        this.getHomeGoods({
          type: 'new',
          page: ++this.goods.new.page
        })

        this.getHomeGoods({
          type: 'sell',
          page: ++this.goods.sell.page
        })
      },
      getHomeGoods(params) {
        getHomeGoods(params).then(res => {
          this.goods[params.type].list.push(...res.list);
        })
      },
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }

      }
    }

  };

</script>

<style>
  .nav-home {
    background: var(--color-tint);
  }

  .nav-home h1 {
    margin: 0;
    font-size: 18px;
    color: #fff;
    font-weight: 400;
  }

</style>
