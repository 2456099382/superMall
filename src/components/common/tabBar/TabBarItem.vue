<template>
  <div :style="color" @click="itemClick" class="tab-bar-item">
    <div v-if="isActive">
      <slot name="active-img"></slot>
    </div>
    <div v-else>
      <slot name="img"></slot>
    </div>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String
    },
    activeColor: {
      type: String,
      default: "red"
    }
  },
  computed: {
    isActive() {
      return this.$route.path.includes(this.path);
    },
    color() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  display: flex;
  flex-direction: column;

  align-items: center;

  cursor: pointer;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;

  margin-top: 8px;
}

.tab-bar-item span {
  font-size: 14px;
  line-height: 2;
}
</style>
