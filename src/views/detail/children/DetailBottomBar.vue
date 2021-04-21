<template>
  <div class="detail-bottom-bar">
    <div class="icon service">
      <i></i>
      <div>客服</div>
    </div>
    <div class="icon shop">
      <i></i>
      <div>店铺</div>
    </div>
    <div class="icon afav">
      <i></i>
      <div>收藏</div>
    </div>
    <div class="txt cart" @click="addCart">添加购物车</div>
    <div class="txt purchase">购买</div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addCart() {
      this.$emit("addCart");
    },
  },
};
</script>

<style scoped>
.detail-bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 58px;

  text-align: center;
  background-color: #fff;
  color: #333;
}
.detail-bottom-bar .icon {
  flex-grow: 2;
  font-size: 14px;
}
.detail-bottom-bar .txt {
  flex-grow: 3;
  line-height: 58px;
}
.icon i {
  display: inline-block;
  width: 22px;
  height: 22px;
  margin: 10px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.icon.service i {
  background-position-y: -52px;
}
.icon.shop i {
  background-position-y: -98px;
}
.cart {
  background-color: yellow;
}

.purchase {
  color: #fff;
  background-color: var(--color-tint);
}
</style>
