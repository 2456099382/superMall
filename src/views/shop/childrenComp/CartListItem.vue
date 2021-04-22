<template>
  <li class="list-item">
    <div class="item-selector">
      <cart-check-button
        @click.native="checkClick"
        :is-active="product.checked"
      />
    </div>
    <div class="item-img">
      <img :src="product.img" class="img" alt="" @load="imgLoad" />
    </div>
    <div class="item-info">
      <div class="title">{{ product.title }}</div>
      <div class="desc">{{ product.desc }}</div>
      <div class="shop">
        <span class="price">￥{{ product.price }}</span>
        <span class="count">x{{ product.count }}</span>
      </div>
    </div>
  </li>
</template>

<script>
import CartCheckButton from "./CartCheckButton";

export default {
  name: "CartListItem",
  components: { CartCheckButton },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    imgLoad() {
      this.$emit("itemImgLoad");
    },
    checkClick() {
      this.isActive = this.product.checked = !this.product.checked;
    }
  }
};
</script>

<style scoped>
.list-item {
  display: flex;
  padding: 13px 8px;
  border-bottom: 3px solid rgba(0, 0, 0, 0.05);
}

.list-item .img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;

  margin: 0 10px;
}

.list-item .item-info {
  overflow: hidden;
}

.list-item .item-info div {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.list-item .item-info div.desc {
  margin-top: 15px;
  font-size: 14px;
}

.list-item .item-info div.shop {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.list-item .item-info div.shop .price {
  color: orangered;
}
</style>
