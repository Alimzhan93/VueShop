<template>
  <div class="hello">
    <h1>Склад</h1>
    <table class="table">
      <tbody>
        <tr v-for="(item, index) in productList" v-bind:key="index">
          <td>
            {{ item }}
          </td>
          <td>
            <button class="btn btn-primary" v-on:click="addTocart(item)">
              Добавить в избраное
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations } from "vuex";
export default defineComponent({
  name: "Products",
  data() {
    return {
      productList: ["computer"],
    };
  },
  methods: {
    ...mapMutations(["ADD_TO_CART"]),
    addTocart(item) {
      this.ADD_TO_CART(item);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.btn-primary {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 17.5px 25px;
  gap: 8px;

  width: 212px;
  height: 50px;

  /* white-gray */

  background: #f4f5f9;
  border-radius: 10px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 1;
}
.hello {
  width: 1200px;
  height: 110px;
  margin: 0 auto;
  left: 360px;
  top: 0px;
  margin: 0 auto;
}
</style>
