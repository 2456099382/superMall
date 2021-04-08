<template>
  <div class="recommend">
    <div
      class="recommend-item"
      :style="{ width: itemWidth }"
      v-for="item in recommends"
      :key="item.link"
    >
      <a :href="item.link"
        ><img :src="item.image" alt="" />
        <div class="title">{{ item.title }}</div></a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    itemWidth() {
      return Math.floor(100 / this.recommends.length) + "%";
    }
  }
};
</script>

<style>
.recommend {
  display: flex;
  padding: 15px 0 20px;
  border-bottom: 8px solid #eee;
  text-align: center;
}
.recommend-item img {
  width: 65%;
}
.recommend-item .title {
  margin-top: 8px;
}
</style>
