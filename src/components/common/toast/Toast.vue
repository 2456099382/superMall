<template>
  <div class="toast" v-show="isShow">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      isShow: false,
      message: ""
    };
  },
  methods: {
    show(message = "默认文字", delay = 2000) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
      }, delay);
    }
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 10vh;
  left: 50%;
  transform: translateX(-50%);

  padding: 10px 25px;

  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  color: #fff;
  z-index: 99;
}
</style>
