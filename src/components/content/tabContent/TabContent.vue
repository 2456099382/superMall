<template>
  <div class="tab-content">
    <div
      v-for="(item, index) in titles"
      :key="item"
      @click="itemClick(index)"
      :class="isActive(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabContent",
  data() {
    return {
      currentIndex: 0,
      tabContentTop: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    isActive() {
      return (index) => {
        return {
          active: this.currentIndex === index,
        };
      };
    },
  },
  methods: {
    itemClick(index) {
      this.$emit("tabClick", index);
    },
  },
};
</script>
<style scoped>
.tab-content {
  display: flex;
  height: 44px;
  line-height: 44px;

  text-align: center;
  font-size: 18px;
  font-weight: 700;
  position: sticky;
  z-index: 9;
  top: 0;
  background-color: #fff;
}

.tab-content div {
  flex-grow: 1;
}

.tab-content div span {
  padding: 0 5px 5px;
}

.tab-content div.active span {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
}
</style>
