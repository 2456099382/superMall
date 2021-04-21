<template>
  <div class="detail-info">
    <div class="desc-container">
      <div class="top"></div>
      <p class="desc">{{ detailInfo.desc }}</p>
      <div class="bottom"></div>
    </div>
    <div class="key">{{ detailInfo.key }}</div>
    <ul>
      <li v-for="(item, i) in detailInfo.list" :key="i">
        <img :src="item" alt="" @load="imgLoad" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DetailInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgLoad() {
      this.$emit("detailImgLoad");
    },
  },
};
</script>

<style scoped>
.detail-info {
  padding-top: 15px;
}
.desc-container {
  padding: 0 25px;

  line-height: 1.2;
}

.desc {
  padding: 15px 0;
}
.key {
  margin: 10px 25px;
}

.top,
.bottom {
  position: relative;

  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
}

.bottom {
  float: right;
}
.top::before {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}

.bottom::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  right: 0;
  bottom: 0;
}

img {
  max-width: 100%;
}
</style>