import { createStore } from "vuex";
import { mycartproductlist } from "@/store/storeType";
import { mysdelkiproductlist } from "@/store/storeO";

export default createStore({
  state: {
    mycartproductlist: [] as mycartproductlist[],
    mysdelkiproductlist: [] as mysdelkiproductlist[],
  },
  getters: {
    // countofcartproduct: (state) => {
    //   return state.mycartproductlist.length;
    // },
    mycartList: (state) => {
      return state.mycartproductlist;
    },
    sdelki: (state) => {
      return state.mysdelkiproductlist;
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
    ADD_TO_SDELKI: (state, product) => {
      // state.mycartproductlist = product;
      state.mysdelkiproductlist.push(product);
    },
    DELETE_FROM_SDELKI: (state, product) => {
      state.mysdelkiproductlist.splice(product, 1);
    },
  },
  actions: {},
  modules: {},
});
