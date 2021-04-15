<template>
  <div class="goods-list">
    <goods-list-item
      v-for="(item, index) in goodsList"
      :key="index"
      :goodsListItem="item"
    />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  components: {
    GoodsListItem,
  },
  name: "GoodsList",
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  created() {},
};
</script>

<style>
.goods-list {
  display: flex;

  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
