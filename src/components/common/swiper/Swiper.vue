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
    <!-- 
    <div class="indicator" v-show="showIndicator">
      <slot name="indicator"></slot>
    </div> -->

    <div class="indicator" v-show="showIndicator">
      <span
        :class="{ active: currentIndex - 1 === index }"
        v-for="(item, index) in slideLength"
        :key="index"
      ></span>
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
      swiper: null,
      slideLength: 0,
    };
  },
  props: {
    interval: {
      type: Number,
      default: 3000,
    },
    animation: {
      type: Number,
      default: 300,
    },
    showIndicator: {
      type: Boolean,
      default: true,
    },
    moveRadio: {
      type: Number,
      default: 0.2,
    },
  },
  mounted() {
    this.swiper = document.querySelector(".swiper");
    setTimeout(() => {
      this.handle();
    }, 200);
  },
  methods: {
    handle() {
      this.slideWidth = this.swiper.offsetWidth;
      const childrens = this.swiper.children;
      this.slideLength = childrens.length;
      if (childrens.length > 1) {
        const firstEle = childrens[0].cloneNode(true);
        const lastEle = childrens[childrens.length - 1].cloneNode(true);

        this.swiper.appendChild(firstEle);
        this.swiper.insertBefore(lastEle, childrens[0]);

        this.slideCount = this.swiper.children.length;

        this.startTimer();
        this.setPosition();
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

        this.swiper.style.transform = `translateX(${
          -this.currentIndex * this.slideWidth
        }px)`;

        this;
      } else if (this.currentIndex === this.slideCount - 1) {
        this.swiper.style.transition = 0;
        this.currentIndex = 1;

        this.swiper.style.transform = `translateX(${
          -this.currentIndex * this.slideWidth
        }px)`;
      }
    },
    setStatic() {
      this.swiper.style.transition = this.animation + "ms";
      this.swiper.style.transform = `translateX(${
        -this.currentIndex * this.slideWidth
      }px)`;

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

      this.swiper.style.transform = `translateX(${
        -this.currentIndex * this.slideWidth + this.dis
      }px)`;
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
    },
  },
};
</script>

<style scoped>
.hy-swiper {
  width: 100vw;
  overflow: hidden;
  position: relative;
}
.swiper {
  display: flex;
}
.indicator {
  position: absolute;
  display: flex;
  justify-content: center;
  left: 0;
  bottom: 15px;

  width: 100%;
}
.indicator span {
  display: inline-block;

  width: 8px;
  height: 8px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: #fff;
}
.indicator span.active {
  background-color: #d43e23;
}
</style>
