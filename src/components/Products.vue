<template>
  <ProductsItem></ProductsItem>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductsItem from "@/components/ProductsItem.vue";
export default defineComponent({
  name: "Products",
  data() {
    return {};
  },
  methods: {},
  components: { ProductsItem },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
