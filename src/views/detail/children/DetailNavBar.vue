<template>
  <nav-bar>
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.svg" alt="" />
    </div>
    <div slot="center">
      <div class="titles">
        <div
          class="title"
          :class="{ active: currentIndex === index }"
          v-for="(title, index) in titles"
          :key="index"
          @click="titleClick(index)"
        >
          {{ title }}
        </div>
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return ["商品", "参数", "评论", "推荐"];
      },
    },
  },
  methods: {
    backClick() {
      this.$router.back();
    },
    titleClick(index) {
      this.currentIndex = index;

      this.$emit("titleClick", index);
    },
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.back img {
  vertical-align: middle;
}

.titles {
  display: flex;
  justify-content: space-around;

  font-size: 13px;
}
.title.active {
  color: var(--color-high-text);
}
</style>