<template>
  <div class="favorites">
    <h1>Избраное</h1>
    <table class="table">
      <tbody>
        <tr v-for="(item, index) in mycartList" v-bind:key="index">
          <td>
            {{ item }}
          </td>
          <td>
            <button class="btn btn-primary" v-on:click="deletefromcart(item)">
              удалить из избраного
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <img src="" alt="" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
export default defineComponent({
  methods: {
    ...mapMutations(["DELETE_FROM_CART"]),
    deletefromcart(item) {
      this.DELETE_FROM_CART(item);
    },
  },
  computed: {
    ...mapGetters(["mycartList"]),
  },
  components: {},
});
</script>
<style>
.favorites {
  width: 1200px;
  height: 110px;
  margin: 0 auto;
  left: 360px;
  top: 0px;
  margin: 0 auto;
}
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
</style>
