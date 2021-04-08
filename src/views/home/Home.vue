<template>
<div id="home">
  <header class="head">
    <home-nav-bar></home-nav-bar>
  </header>
  <home-swiper :banners="banners"></home-swiper>
  <recommend-view :recommends="recommends"></recommend-view>
  <population-in-week></population-in-week>
  <tab-content :titles="['流行','新款','热门']"></tab-content>
  
  <ul>
    <li>列表1</li>
    <li>列表2</li>
    <li>列表3</li>
    <li>列表4</li>
    <li>列表5</li>
    <li>列表6</li>
    <li>列表7</li>
    <li>列表8</li>
    <li>列表9</li>
    <li>列表10</li>
    <li>列表11</li>
    <li>列表12</li>
    <li>列表13</li>
    <li>列表14</li>
    <li>列表15</li>
    <li>列表1</li>
    <li>列表2</li>
    <li>列表3</li>
    <li>列表4</li>
    <li>列表5</li>
    <li>列表6</li>
    <li>列表7</li>
    <li>列表8</li>
    <li>列表9</li>
    <li>列表10</li>
    <li>列表11</li>
    <li>列表12</li>
    <li>列表13</li>
    <li>列表14</li>
    <li>列表15</li><li>列表1</li>
    <li>列表2</li>
    <li>列表3</li>
    <li>列表4</li>
    <li>列表5</li>
    <li>列表6</li>
    <li>列表7</li>
    <li>列表8</li>
    <li>列表9</li>
    <li>列表10</li>
    <li>列表11</li>
    <li>列表12</li>
    <li>列表13</li>
    <li>列表14</li>
    <li>列表15</li>
  </ul>
</div>
</template>
</div>


<script>
import Swiper from 'components/common/swiper/Swiper';
import RecommendView from './childrens/RecommendView';
import PopulationInWeek from './childrens/PopulationInWeek';
import HomeNavBar from './childrens/HomeNavBar'
import TabContent from 'components/content/tabContent/TabContent';




import { getHomeMultidata } from "network/home";
import HomeSwiper from './childrens/HomeSwiper';

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  components: {
    RecommendView,
    Swiper,
    PopulationInWeek,
    HomeNavBar,
    HomeSwiper,
    TabContent
  },
  created(){
    getHomeMultidata().then(res=>{
      this.banners = res.banner.list;
      this.recommends = res.recommend.list;

      console.log(this.banners);
    })
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
