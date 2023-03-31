<template>
  <div class="post">
    <Post
      :options="categories"
      :selected="selected"
      @select="sortByCategories"
    />
    <Input />
  </div>
  <div class="home">
    <h1>Сделки</h1>
  </div>
  <sdelkiitem
    v-for="item in filtereProduscts"
    :key="item.article"
    :sdelkiitem_data="item"
  />
</template>
<script lang="ts">
import Input from "@/components/Input.vue";
import { defineComponent } from "vue";
import sdelkiitem from "@/views/sdelkiitem.vue";
import Post from "@/components/Post.vue";
interface sdelki_data {
  article: string;
}
export default defineComponent({
  components: { sdelkiitem, Post, Input },
  name: "sdelki",
  props: {
    sdelki_data: {
      type: Array as () => Array<sdelki_data>,
      required: true,
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

        this.sdelki_data.map(function (item: { category: any }) {
          if (item.category === category.name) {
            vm.sorteProducts.push(item);
          }
        });
      }
    },
  },
  computed: {
    filtereProduscts() {
      if (this.sorteProducts.length) {
        return this.sorteProducts;
      } else {
        return this.sdelki_data;
      }
    },
  },
});
</script>
<style>
.home {
  width: 1200px;
  height: 130px;
  margin: 0 auto;
  left: 360px;
  top: 0px;
}
</style>
