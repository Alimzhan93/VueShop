<template>
  <div class="home">
    <h1>Сделки</h1>
  </div>
  <sdelkiitem
    v-for="item in sdelki_data"
    :key="item.article"
    :sdelkiitem_data="item"
  />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import sdelkiitem from "@/views/sdelkiitem.vue";

export default defineComponent({
  components: { sdelkiitem },
  name: "sdelki",
  props: {
    sdelki_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {},
  computed: {},
});
</script>
<style>
.home {
  width: 1200px;
  height: 75px;
  margin: 0 auto;
  left: 360px;
  top: 0px;
}
</style>
