<template>
  <div class="goods-list-item">
    <!-- <a :href="goodsListItem.link"> -->
    <img
      :src="goodsListItem.show.img"
      :alt="goodsListItem.title"
      @load="imgLoad"
    />
    <div class="text">
      <p class="title" :title="goodsListItem.title">
        {{ goodsListItem.title }}
      </p>
      <span class="price">￥{{ goodsListItem.price }}</span>
      <span class="cfav">{{ goodsListItem.cfav }}</span>
    </div>
    <!-- </a> -->
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsListItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created() {},
  methods: {
    imgLoad() {
      this.$bus.$emit("imgLoad");
    },
  },
};
</script>

<style scoped>
.goods-list-item {
  position: relative;
  width: 48%;
  padding-bottom: 40px;

  text-align: center;
}

.goods-list-item img {
  width: 100%;

  min-height: 280px;
  border-radius: 5px;
}

.goods-list-item .text {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;

  font-size: 12px;
  overflow: hidden;
  text-align: center;
}

.goods-list-item p {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 3px;
}

.goods-list-item .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-list-item span.cfav {
  position: relative;
}

.goods-list-item span.cfav::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
