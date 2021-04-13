<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  };

</script>

<style scoped>
  .tab-bar {
    position: fixed;
    left: 0;
    bottom: -1px;
    display: flex;
    justify-content: space-around;
    z-index: 99;

    width: 100%;

    background-color: #f5f5f5;
    box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.1);
  }

</style>
