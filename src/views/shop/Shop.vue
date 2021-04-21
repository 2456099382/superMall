<template>
  <div id="shop">
    <nav-bar class="cart-nav-var">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>

    <cart-list ref="cartList" class="cart-list" />
    <cart-bottom-bar />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import NavBar from "components/common/navbar/NavBar";
import CartList from "./childrenComp/CartList";
import CartBottomBar from "./childrenComp/CartBottomBar";

export default {
  name: "Shop",
  components: { CartBottomBar, CartList, NavBar },
  data() {
    return {
      checkedNum: 0
    };
  },
  computed: {
    ...mapGetters(["cartLength"])
  }
};
</script>

<style scoped>
.cart-nav-var {
  position: fixed;
  width: 100%;

  background-color: var(--color-tint);
  color: #fff;
}

#shop {
  position: relative;
  height: 100vh;

  overflow: hidden;
}
.cart-list {
  margin-top: 44px;
}
</style>
