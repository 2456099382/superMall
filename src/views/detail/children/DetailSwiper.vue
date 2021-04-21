<template>
  <div class="detail-swiper">
    <swiper v-if="isShow">
      <swiper-item v-for="(item, index) in topImgs" :key="index">
        <img :src="item" alt="" />
      </swiper-item>
    </swiper>
    <img :src="topImgs[0]" v-else alt="" class="img" />
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "DetailSwiper",
  props: {
    topImgs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  computed: {
    isShow() {
      const isShwo = this.topImgs.length > 1;
      return isShwo;
    },
  },
};
</script>

<style scoped>
.detail-swiper {
  max-height: 300px;
  overflow: hidden;
}
.detail-swiper .hy-swiper {
  height: 300px;
  overflow: hidden;
}

.img {
  width: 100%;
}
</style>