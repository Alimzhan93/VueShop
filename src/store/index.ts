import { createStore } from "vuex";
import { mycartproductlist } from "@/store/storeType";

export default createStore({
  state: {
    mycartproductlist: [] as mycartproductlist[],
  },
  getters: {
    countofcartproduct: (state) => {
      return state.mycartproductlist.length;
    },
    mycartList: (state) => {
      return state.mycartproductlist;
    },
  },
  mutations: {
    ADD_TO_CART: (state, product) => {
      // state.mycartproductlist = product;
      state.mycartproductlist.push(product);
    },
    DELETE_FROM_CART: (state, product) => {
      state.mycartproductlist.splice(product, 1);
    },
  },
  actions: {},
  modules: {},
});
