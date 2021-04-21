<template>
  <div class="detail-base-info">
    <div class="desc">
      <h3>{{ goods.title }}</h3>
    </div>
    <div class="sell">
      <div class="price-container">
        <span class="price">{{ goods.newPrice }}</span>
        <span class="old-price">{{ goods.oldPrice }}</span>
        <span class="hot">火热促销</span>
      </div>
      <div class="sell-num">
        <span v-for="(item, index) in goods.columns" :key="index">{{
          item
        }}</span>
      </div>
    </div>
    <div class="service">
      <div
        v-for="(item, index) in goods.service"
        :key="index"
        v-show="index !== goods.service.length - 1 && item.icon"
      >
        <img :src="item.icon" alt="" />
        {{ item.name }}
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    serviceLength() {},
  },
};
</script>

<style scoped>
.detail-base-info {
  padding: 0 10px;
}
.desc {
  margin: 10px 0;
}

.desc h3 {
  font-size: 16px;
  line-height: 1.3;
  font-weight: 400;

  color: #222;
}

.price {
  font-size: 24px;
  color: var(--color-high-text);
}
.old-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}

.hot {
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 8px;
  margin-left: 5px;
  position: relative;
  top: -8px;
}

.sell-num {
  margin-top: 15px;
  line-height: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.service {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  line-height: 60px;
  font-size: 14px;
}
.service img {
  position: relative;
  top: 2px;

  width: 14px;
  height: 14px;
}
</style>