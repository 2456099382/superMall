import { ADD_COUNTER, ADD_CART } from "./mutations.types";

export default {
  addCart({ state, commit }, payload) {
    let objCounter = null;

    objCounter = state.cartList.find(item => {
      return item.iid === payload.iid;
    });

    if (objCounter) {
      commit(ADD_COUNTER, objCounter);
    } else {
      objCounter = payload;
      objCounter.count = 1;

      commit(ADD_CART, objCounter);
    }
  }
};
