<template>
  <div class="hello">
    <h1>Склад</h1>
  </div>
  <ProductsItem
    v-for="product in PRODUCTS"
    :key="product.article"
    v-bind:product_data="product"
    @addToSdelki="addToSdelki"
    @addToMycartlist="addToMycartlist"
  ></ProductsItem>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import ProductsItem from "@/components/ProductsItem.vue";
export default defineComponent({
  name: "Products",
  emits: ["addToSdelki"],
  components: { ProductsItem },
  props: {
    sdelki_data: {
      type: Array,
      default() {
        return [];
      },
    },
    mycartlist_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      // products: [
      //   {
      //     image: "image.png",
      //     name: "T-shirt 1",
      //     price: 33000,
      //     article: "T1",
      //     available: true,
      //   },
      //   {
      //     image: "image.png",
      //     name: "T-shirt 2",
      //     price: 33000,
      //     article: "T2",
      //     available: true,
      //   },
      //   {
      //     image: "image.png",
      //     name: "T-shirt 3",
      //     price: 33000,
      //     article: "T3",
      //     available: false,
      //   },
      //   {
      //     image: "image.png",
      //     name: "T-shirt 4",
      //     price: 33000,
      //     article: "T4",
      //     available: true,
      //   },
      //   {
      //     image: "image.png",
      //     name: "T-shirt 5",
      //     price: 33000,
      //     article: "T5",
      //     available: false,
      //   },
      //   {
      //     image: "image.png",
      //     name: "T-shirt 6",
      //     price: 33000,
      //     article: "T6",
      //     available: true,
      //   },
      // ],
    };
  },
  methods: {
    ...mapActions([
      "GET_PRODUCTS_FROM_API",
      "ADD_TO_SDELKI",
      "ADD_TO_MYCARTLIST",
    ]),
    addToSdelki(data: any) {
      this.ADD_TO_SDELKI(data);
    },
    addToMycartlist(data: any) {
      this.ADD_TO_MYCARTLIST(data);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log("Data arrived!");
      }
    });
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello {
  width: 1200px;
  height: 75px;
  margin: 0 auto;
  left: 360px;
  top: 0px;
}
</style>
