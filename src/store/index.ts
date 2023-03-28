import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    products: [],
    sdelki: [],
    mycartlist: [],
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    SDELKI(state) {
      return state.sdelki;
    },
    MYCARTLIST(state) {
      return state.mycartlist;
    },
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_SDELKI: (state, product) => {
      state.sdelki.push(product);
    },
    SET_MYCARTLIST: (state, product) => {
      state.mycartlist.push(product);
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios("http://localhost:3000/products", {
        method: "GET",
      })
        .then((products) => {
          commit("SET_PRODUCTS_TO_STATE", products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    ADD_TO_SDELKI({ commit }, product) {
      commit("SET_SDELKI", product);
    },
    ADD_TO_MYCARTLIST({ commit }, product) {
      commit("SET_MYCARTLIST", product);
    },
  },
  modules: {},
});
