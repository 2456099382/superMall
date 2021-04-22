<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tab-bar activeColor="#ff5777" v-show="tabIsShow"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "./components/content/mainTabBar/MainTabBar";
export default {
  name: "App",
  data() {
    return {
      tabIsShow: true
    };
  },
  components: {
    MainTabBar
  },
  mounted() {
    this.$bus.$on("enterDetail", () => {
      this.tabIsShow = false;
    });
    this.$bus.$on("leaveDetail", () => {
      this.tabIsShow = true;
    });
  }
};
</script>

<style>
@import url("assets/css/base.css");
</style>
