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
  bottom: 0;
  display: flex;
  justify-content: space-around;

  width: 100%;

  background-color: #f5f5f5;
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.1);
}
</style>
