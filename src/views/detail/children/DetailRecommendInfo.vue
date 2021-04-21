<template>
  <div class="detail-recommend-info">
    <goods-list :goodsList="recommendInfo" />
  </div>
</template>

<script>
import GoodsList from "components/content/goodsList/GoodsList";
import GoodsListItem from "components/content/goodsList/GoodsListItem";
export default {
  components: { GoodsListItem, GoodsList },
  name: "DetailRecommendInfo",
  props: {
    recommendInfo: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  mounted() {}
};
</script>

<style scoped></style>
