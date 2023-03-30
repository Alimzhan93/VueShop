import { createStore } from "vuex";
import axios from "axios";
interface Product {
  id: number;
  name: string;
  price: number;
}
export default createStore({
  state: {
    searchValue: "",
    products: [],
    sdelki: [] as Product[],
    mycartlist: [] as Product[],
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
    SEARCH_VALUE(state) {
      return state.searchValue;
    },
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_SDELKI: (state, product: Product) => {
      state.sdelki.push(product);
    },
    SET_MYCARTLIST: (state, product: Product) => {
      state.mycartlist.push(product);
    },
    REMOVE_MYCARTLIST: (state, index) => {
      state.mycartlist.splice(index, 1);
    },
    SET_SEARCH_VALUE: (state, value) => {
      state.searchValue = value;
    },
  },
  actions: {
    async GET_PRODUCTS_FROM_API({ commit }) {
      try {
        const products = await axios("http://localhost:3000/products", {
          method: "GET",
        });
        commit("SET_PRODUCTS_TO_STATE", products.data);
        return products;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    ADD_TO_SDELKI({ commit }, product) {
      commit("SET_SDELKI", product);
    },
    ADD_TO_MYCARTLIST({ commit }, product) {
      commit("SET_MYCARTLIST", product);
    },
    DELETE_FROM_MYCARTLIST({ commit }, index) {
      commit("REMOVE_MYCARTLIST", index);
    },
    GET_SEARCH_VALUE({ commit }, value) {
      commit("SET_SEARCH_VALUE", value);
    },
  },
  modules: {},
});
