import { ADD_COUNTER, ADD_CART } from "./mutations.types";

export default {
  addCart({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      let objCounter = null;

      objCounter = state.cartList.find(item => {
        return item.iid === payload.iid;
      });

      if (objCounter) {
        commit(ADD_COUNTER, objCounter);
        resolve("商品数量加一");
      } else {
        objCounter = payload;
        objCounter.count = 1;

        commit(ADD_CART, objCounter);
        resolve("商品添加成功");
      }
    });
  }
};
