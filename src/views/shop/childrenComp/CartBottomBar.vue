<template>
  <div class="cart-bottom-bar">
    <div class="left">
      <div class="all-select" @click="allSelect">
        <cart-check-button class="check-btn" :is-active="ieSelectAll" />
        全选
      </div>
      <div class="total">合计:￥{{ totalPrice }}</div>
    </div>
    <div class="settlement">
      <p type="button">
        去结算 <span>({{ checkNum }})</span>
      </p>
    </div>
  </div>
</template>

<script>
import CartCheckButton from "./CartCheckButton";

import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  components: { CartCheckButton },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      let total = 0;
      for (let v of this.cartList) {
        if (v.checked) {
          total += v.count * v.price;
        }
      }
      return total.toFixed(2);
    },
    checkNum() {
      let num = 0;
      for (let v of this.cartList) {
        if (v.checked) {
          num++;
        }
      }
      return num;
    },
    ieSelectAll() {
      if (this.cartList.length > 0) {
        const value = !this.cartList.find((item) => !item.checked);
        return value;
      } else {
        return false;
      }
    },
  },
  methods: {
    allSelect() {
      if (this.ieSelectAll) {
        this.cartList.forEach((item) => (item.checked = false));
      } else {
        this.cartList.forEach((item) => (item.checked = true));
      }
    },
  },
};
</script>

<style scoped>
.cart-bottom-bar {
  position: absolute;
  bottom: 64px;
  width: 100%;
  height: 44px;
  line-height: 44px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #eee;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.15);
}

.cart-bottom-bar .left {
  display: flex;
  align-items: center;
}

.cart-bottom-bar .left > div {
  margin-left: 20px;
}

.all-select {
  display: flex;
  align-items: center;
}

.check-btn {
  transform: translateY(0);
}

.settlement {
  padding: 0 25px;
  line-height: 44px;
  color: #fff;
  background-color: orangered;
}
</style>
