<template>
  <div class="cart-list">
    <scroll
      :probe-type="3"
      :pull-up-load="true"
      ref="scroll"
      :bottom="`${64 + 44}px`"
    >
      <ul>
        <cart-list-item
          v-for="(item, index) in cartList"
          :key="index"
          :product="item"
          @itemImgLoad="imgLoad"
        />
      </ul>
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Scroll from "components/common/scroll/scroll";
import CartListItem from "./CartListItem";

export default {
  name: "CartList",
  components: { CartListItem, Scroll },
  computed: {
    ...mapGetters(["cartList"])
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.scrollRefresh();
    }
  }
};
</script>

<style scoped></style>
