<template>
  <div class="wrapper" ref="wrapper">
    <div class="content" ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import betterScroll from "better-scroll";
export default {
  name: "scroll",
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    setTimeout(() => {
      this.init();
    }, 200);
  },
  computed: {},
  methods: {
    init() {
      if (this.$refs.wrapper) {
        this.scroll = new betterScroll(this.$refs.wrapper, {
          probeType: 3,
          click: true
        });
        return;
      } else {
        this.init();
      }
    }
  }
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  top: 44px;
  bottom: 64px;
  left: 0;
  right: 0;

  overflow: scroll;
}
</style>
