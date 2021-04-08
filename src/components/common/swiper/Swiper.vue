<template>
  <div class="hy-swiper">
    <div
      class="swiper"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
    >
      <slot></slot>
    </div>
    <div class="indicator">
      <slot name="indicator"></slot>
    </div>
    <div class="indicator">
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  data() {
    return {
      //当前slide的索引
      currentIndex: 1,
      scrolling: false,
      timer: null,
      swiperStyle: {},
      slideWidth: 0,
      slideCount: 0,
      swiper: null
    };
  },
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    animation: {
      type: Number,
      default: 300
    },
    showIndicator: {
      type: Boolean,
      default: true
    },
    moveRadio: {
      type: Number,
      default: 0.2
    }
  },
  mounted() {
    this.swiper = document.querySelector(".swiper");
    setTimeout(() => {
      this.handle();
      this.setPosition();
    }, 200);
  },
  methods: {
    handle() {
      this.slideWidth = this.swiper.offsetWidth;
      const childrens = this.swiper.children;

      if (childrens.length > 1) {
        const firstEle = childrens[0].cloneNode(true);
        const lastEle = childrens[childrens.length - 1].cloneNode(true);

        this.swiper.appendChild(firstEle);
        this.swiper.insertBefore(lastEle, childrens[0]);

        this.slideCount = this.swiper.children.length;
      }
    },
    setPosition() {
      this.scrolling = true;

      this.setStatic();
    },
    checkPosition() {
      if (this.currentIndex <= 0) {
        this.swiper.style.transition = 0;
        this.currentIndex = this.slideCount - 2;

        this.swiper.style.transform = `translateX(${-this.currentIndex *
          this.slideWidth}px)`;

        this;
      } else if (this.currentIndex === this.slideCount - 1) {
        this.swiper.style.transition = 0;
        this.currentIndex = 1;

        this.swiper.style.transform = `translateX(${-this.currentIndex *
          this.slideWidth}px)`;
      }
    },
    setStatic() {
      this.swiper.style.transition = this.animation + "ms";
      this.swiper.style.transform = `translateX(${-this.currentIndex *
        this.slideWidth}px)`;

      setTimeout(() => {
        this.swiper.style.transition = "0ms";
        this.scrolling = false;
        this.checkPosition();
      }, this.animation);
    },
    toNext() {
      this.currentIndex++;
      this.setPosition();
    },
    toPrev() {
      this.currentIndex--;
      this.setPosition();
    },
    startTimer() {
      if (this.timer != null) {
        clearInterval(this.timer);
      }
      this.timer = setInterval(this.toNext, this.interval);
    },
    stopTimer() {
      clearInterval(this.timer);
    },

    touchstart(e) {
      if (this.scrolling) {
        return;
      }
      this.stopTimer();
      this.startX = e.touches[0].clientX;
    },
    touchmove(e) {
      this.currentX = e.touches[0].clientX;

      this.dis = this.currentX - this.startX;

      this.swiper.style.transform = `translateX(${-this.currentIndex *
        this.slideWidth +
        this.dis}px)`;
    },
    touchend() {
      this.startTimer();
      const dis = Math.abs(this.dis);
      if (this.dis === 0) {
        return;
      } else if (
        this.dis > 0 &&
        dis > this.moveRadio * this.slideWidth &&
        this.currentIndex > 0
      ) {
        this.toPrev();
      } else if (
        this.dis < 0 &&
        dis > this.moveRadio * this.slideWidth &&
        this.currentIndex < this.slideCount - 1
      ) {
        this.toNext();
      }

      this.setPosition();
    }
  }
};
</script>

<style scoped>
.hy-swiper {
  width: 100vw;
  overflow: hidden;
}
.swiper {
  display: flex;
}
</style>
