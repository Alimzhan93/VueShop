<template>
  <div class="home">
    <Products />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Products from "@/components/Products.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    Products,
  },
  computed: {},
});
</script>
<style></style>
