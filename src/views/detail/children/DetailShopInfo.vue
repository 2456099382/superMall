<template>
  <div class="detail-shop-info">
    <div class="business">
      <img :src="shopInfo.logo" alt="" />
      <h3>{{ shopInfo.name }}</h3>
    </div>
    <div class="container">
      <div class="shop-left">
        <div class="count">
          <div class="num">{{ shopInfo.count | simple }}</div>
          <a href="#" class="txt">总销量</a>
        </div>
        <div class="all-goods">
          <div class="num">{{ shopInfo.allGoods }}</div>
          <a href="#" class="txt">全部宝贝</a>
        </div>
      </div>
      <div class="shop-right">
        <table>
          <tr v-for="(item, index) in shopInfo.score" :key="index">
            <td>{{ item.name }}</td>
            <td :class="item.score >= 5 ? 'high-score' : 'low-score'">
              {{ item.score }}
            </td>
            <td :class="item.score >= 5 ? 'high-better' : 'low-better'">
              {{ isBetter(item.isBetter) }}
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="bottom">
      <a class="bottom-btn" href="#">进店逛逛</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  computed: {
    isBetter() {
      return function (is) {
        return is ? "高" : "低";
      };
    },
  },
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  updated() {
    // console.log(this.shopInfo);
  },
  filters: {
    simple(val) {
      return parseInt(val / 10000) + "万";
    },
  },
};
</script>

<style scoped>
.detail-shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}
.detail-shop-info .business {
  display: flex;
}
.detail-shop-info .business img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.detail-shop-info .business h3 {
  line-height: 45px;
  font-weight: 400;
  font-size: 14px;
  margin-left: 5px;
}

.detail-shop-info .container {
  display: flex;
  text-align: center;

  margin-top: 15px;
}
.detail-shop-info .container > div {
  flex-grow: 1;
}

.detail-shop-info .container .shop-left {
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  color: #333;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.detail-shop-info .container .shop-left .num {
  font-size: 18px;
}
.detail-shop-info .container .shop-left .txt {
  display: inline-block;
  margin-top: 10px;
  font-size: 12px;
}

table {
  width: 120px;
  margin: 0 auto;
  font-size: 13px;
  color: #333;
}
table td {
  padding: 5px 0px;
}
table td.low-score {
  color: #5ea732;
}
table td.high-score {
  color: #f13e3a;
}

table td.low-better {
  color: #fff;
  background: #5ea732;
}
table td.high-better {
  color: #fff;
  background: #f13e3a;
}
.bottom {
  text-align: center;
  margin-top: 10px;
}
.bottom-btn {
  display: inline-block;
  width: 150px;
  height: 30px;
  line-height: 30px;

  font-size: 14px;
  background-color: #f2f5f8;
  border-radius: 10px;
}
</style>