import BackTop from "components/content/backTop/BackTop";

const backTopShow = {
  data() {
    return { isBackTopShow: false };
  },
  components: { BackTop },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    listerBackTop(position) {
      this.isBackTopShow = -position.y > 1000;
    }
  }
};
export { backTopShow };
