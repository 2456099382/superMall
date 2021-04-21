<template>
  <div class="wrapper" ref="wrapper" :style="{ top, bottom }">
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
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default() {
        return 1;
      },
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false;
      },
    },
    top: {
      type: String,
      default: "44px",
    },
    bottom: {
      type: String,
      default: "64px",
    },
  },
  mounted() {
    this.scrollInit();
  },
  computed: {},
  methods: {
    scrollInit() {
      this.scroll = new betterScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: true,
        pullUpLoad: this.pullUpLoad,
      });

      this.scrollHandle();
    },
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    scrollHandle() {
      this.scroll &&
        this.scroll.on("scroll", (position) => {
          this.$emit("scroll", position);
        });

      this.scroll &&
        this.scroll.on("pullingUp", () => {
          this.$emit("pullend");
          this.scroll.finishPullUp();
          // this.scroll.refresh();
        });
    },
    scrollRefresh() {
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  top: 44px;
  bottom: 64px;
  left: 0;
  right: 0;

  overflow-y: hidden;
}
</style>
