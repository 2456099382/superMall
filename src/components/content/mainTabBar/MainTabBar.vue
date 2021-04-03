<template>
  <tab-bar>
    <tab-bar-item
      v-for="(val, key) in tabArr"
      :key="key"
      :path="val.path"
      :activeColor="activeColor"
    >
      <img :src="val.imgSrc" alt="imgs" slot="img" />
      <img :src="val.activeSrc" alt="active" slot="active-img" />
      <span slot="text">{{ val.text }}</span>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabBar/TabBar";
import TabBarItem from "components/common/tabBar/TabBarItem";
export default {
  name: "MainTabBar",
  data() {
    return {
      tabArr: [
        {
          imgSrc: require("assets/img/tabbar/home.svg"),
          activeSrc: require("assets/img/tabbar/home_active.svg"),
          text: "首页",
          path: "/home"
        },

        {
          activeSrc: require("assets/img/tabbar/category_active.svg"),
          imgSrc: require("assets/img/tabbar/category.svg"),
          text: "分类",
          path: "/category"
        },

        {
          activeSrc: require("assets/img/tabbar/shopcart_active.svg"),
          imgSrc: require("assets/img/tabbar/shopcart.svg"),
          text: "购物车",
          path: "/shop"
        },

        {
          activeSrc: require("assets/img/tabbar/profile_active.svg"),
          imgSrc: require("assets/img/tabbar/profile.svg"),
          text: "我的",
          path: "/profile"
        }
      ]
    };
  },
  props: {
    activeColor: {
      type: String,
      default: "red"
    }
  },
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style></style>
