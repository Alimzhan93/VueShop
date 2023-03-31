<template>
  <div class="post">
    <Post
      :options="categories"
      :selected="selected"
      @select="sortByCategories"
    />
    <Input />
  </div>
  <div class="favorites">
    <h1>Избраное</h1>
  </div>
  <mycartlistitem
    v-for="(item, index) in filtereProduscts"
    :key="item.article"
    :mycartlititem_data="item"
    @addToSdelki="addToSdelki"
    @deleteMyCart="deleteMyCart(index)"
  />
</template>
<script lang="ts">
import Input from "@/components/Input.vue";
import { defineComponent } from "vue";
import Post from "@/components/Post.vue";
import { mapActions } from "vuex";
import mycartlistitem from "@/views/mycartlistitem.vue";
interface mycartlist_data {
  article: string;
}
export default defineComponent({
  components: { mycartlistitem, Post, Input },
  name: "mycartlist",
  props: {
    mycartlist_data: {
      type: Array as () => Array<mycartlist_data>,
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
  computed: {
    filtereProduscts() {
      if (this.sorteProducts.length) {
        return this.sorteProducts;
      } else {
        return this.mycartlist_data;
      }
    },
  },
  methods: {
    ...mapActions(["DELETE_FROM_MYCARTLIST", "ADD_TO_SDELKI"]),
    addToSdelki(data: any) {
      this.ADD_TO_SDELKI(data);
    },
    deleteMyCart(index: any) {
      this.DELETE_FROM_MYCARTLIST(index);
    },
    sortByCategories(category: any) {
      newFunction.call(this);

      function newFunction(this: any) {
        this.sorteProducts = [];
        let vm = this;

        this.mycartlist_data.map(function (item: { category: any }) {
          if (item.category === category.name) {
            vm.sorteProducts.push(item);
          }
        });
      }
    },
  },
});
</script>
<style>
.favorites {
  width: 1200px;
  height: 130px;
  margin: 0 auto;
  left: 360px;
  top: 0px;
}
</style>
