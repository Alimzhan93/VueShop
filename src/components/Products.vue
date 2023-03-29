<template>
  <div class="hello">
    <Post
      :options="categories"
      :selected="selected"
      @select="sortByCategories"
    />
    <h1>Склад</h1>
  </div>
  <ProductsItem
    v-for="product in filtereProduscts"
    :key="product.article"
    v-bind:product_data="product"
    @addToSdelki="addToSdelki"
    @addToMycartlist="addToMycartlist"
  ></ProductsItem>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Post from "@/components/Post.vue";
import { mapActions, mapGetters } from "vuex";
import ProductsItem from "@/components/ProductsItem.vue";
export default defineComponent({
  name: "Products",
  emits: ["addToSdelki"],
  components: { ProductsItem, Post },
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
      categories: [
        { name: "Все типы", value: 1 },
        { name: "Прямые продажи", value: 2 },
        { name: "Аукцион", value: 3 },
      ],
      selected: "",
      sorteProducts: [],
    };
  },
  methods: {
    sortByCategories(category: any) {
      newFunction.call(this);

      function newFunction(this: any) {
        this.sorteProducts = [];
        let vm = this;

        this.PRODUCTS.map(function (item: { category: any }) {
          if (item.category === category.name) {
            vm.sorteProducts.push(item);
          }
        });
      }
    },
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
    filtereProduscts() {
      if (this.sorteProducts.length) {
        return this.sorteProducts;
      } else {
        return this.PRODUCTS;
      }
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello {
  width: 1200px;
  height: 130px;
  margin: 0 auto;
  left: 360px;
  top: 0px;
}
</style>
