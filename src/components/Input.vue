<template>
  <input
    class="input"
    type="text"
    v-model="searchValue"
    @keydown.enter="search(searchValue)"
  />
  <button class="btn" @click="search(searchValue)">
    <img alt="search" src="@/assets/search.png" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
export default defineComponent({
  data() {
    return {
      searchValue: "",
    };
  },
  computed: {
    ...mapGetters(["SEARCH_VALUE"]),
  },
  methods: {
    ...mapActions(["GET_SEARCH_VALUE"]),
    search(value: any) {
      this.GET_SEARCH_VALUE(value);
      //   this.$router.push("/");
    },
  },
});
</script>

<style scoped>
.input {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 4px 20px 20px;
  gap: 8px;
  font-size: 25px;
  width: 274px;
  height: 5px;

  /* white */

  background: #ffffff;
  /* platinum */

  border: 1px solid #e0e3ee;
  border-radius: 10px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
}
.btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 8px;

  width: 40px;
  height: 40px;

  /* blue-dark

main
*/
  background: #2d3b87;
  border-radius: 10px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
}
</style>
