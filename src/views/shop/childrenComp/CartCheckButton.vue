<template>
  <div class="cart-check-button">
    <img
      src="~assets/img/cart/tick.svg"
      class="icon"
      :class="{ checked: isActive }"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "CartCheckButton",
  props: {
    isActive: {
      type: Boolean
    }
  }
};
</script>

<style scoped>
.cart-check-button {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.icon {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
}

.icon.checked {
  background-color: var(--color-tint);
}
</style>
