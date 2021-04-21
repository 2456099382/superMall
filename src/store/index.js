import VueX from "vuex";
import Vue from "vue";

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
// import {} from "./multation.types";

Vue.use(VueX);

const state = {
  cartList: []
};

const store = new VueX.Store({
  mutations,
  actions,
  state,
  getters
});

export default store;
