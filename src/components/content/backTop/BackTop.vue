<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop"
};
</script>

<style scoped>
.back-top {
  position: fixed;
  right: 8px;
  bottom: 72px;

  z-index: 99;
}

.back-top img {
  width: 64px;
  height: 64px;
}
</style>
