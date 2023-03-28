<template>
  <div class="homesdelki">
    <sdelki :sdelki_data="SDELKI" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import sdelki from "@/views/sdelki.vue";
import { mapGetters } from "vuex";
export default defineComponent({
  name: "homesdelki",
  components: {
    // sdelki,
  },
  computed: {
    ...mapGetters(["SDELKI"]),
  },
});
</script>
<style>
.homesdelki {
  width: 1200px;
  height: 75px;
  margin: 0 auto;
  left: 360px;
  top: 0px;
}
</style>
