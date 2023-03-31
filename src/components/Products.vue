<template>
  <div class="post">
    <Post
      :options="categories"
      :selected="selected"
      @select="sortByCategories"
    />
    <Input />
  </div>
  <div class="hello">
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
import Input from "@/components/Input.vue";
import { defineComponent } from "vue";
import Post from "@/components/Post.vue";
import { mapActions, mapGetters } from "vuex";
import ProductsItem from "@/components/ProductsItem.vue";
interface Product {
  name: string;
}
export default defineComponent({
  name: "Products",
  emits: ["addToSdelki"],
  components: { ProductsItem, Post, Input },
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
      sorteProducts: [] as Product[],
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
    sorteProductsBySearchValue(value: any): void {
      this.sorteProducts = [...this.PRODUCTS];
      if (value) {
        this.sorteProducts = this.sorteProducts.filter(function (item: {
          name: string;
          article?: string;
        }) {
          return (
            item.name.toLowerCase().includes(value.toLowerCase()) ||
            (item.article &&
              item.article.toLowerCase().includes(value.toLowerCase()))
          );
        });
      } else {
        this.sorteProducts = this.PRODUCTS;
      }
    },
  },
  watch: {
    SEARCH_VALUE() {
      this.sorteProductsBySearchValue(this.SEARCH_VALUE);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log("Data arrived!");
        this.sorteProductsBySearchValue(this.SEARCH_VALUE);
      }
    });
  },
  computed: {
    ...mapGetters(["PRODUCTS", "SEARCH_VALUE"]),
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
  height: 50px;
  margin: 0 auto;
  left: 360px;
  top: 0px;
}
.post {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  margin: 0 auto;
  gap: 12px;
  width: 1200px;
  height: 48px;
  left: 344px;
  top: 187px;
}
</style>
