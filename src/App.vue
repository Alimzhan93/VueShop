<template>
  <div class="header">
    <div class="top"></div>
    <router-link class="sklad" to="/"
      ><img src="@/assets/sklad.png" alt="" /> Склад</router-link
    >
    <router-link class="sdelki" to="/sdelki"
      ><img src="@/assets/sdelki.png" alt="" />Сделки</router-link
    >
    <router-link class="dials" to="/mycartlist"
      ><img src="@/assets/vector.png" alt="" />Избраное
    </router-link>
  </div>

  <router-view :sdelki_data="SDELKI" :mycartlist_data="MYCARTLIST" />
</template>
<script lang="ts">
import { defineComponent } from "vue";

import router from "@/router";
import { mapGetters } from "vuex";
export default defineComponent({
  computed: { ...mapGetters(["SDELKI", "MYCARTLIST"]) },
  components: { router },
  data() {
    return {};
  },
  methods: {},
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Montserrat:wght@700&family=Rubik:wght@400;500&display=swap");
.header {
  width: 1200px;
  height: 160px;
  margin: 0 auto;
  left: 360px;
  top: 0px;
  /* white */

  background: #ffffff;
}
.top {
  width: 1200px;
  height: 40px;
  left: calc(50% - 1200px / 2);
  top: 0px;
  /* platinum */

  background: #e0e3ee;
  border-radius: 0px 0px 10px 10px;
}
.header :hover {
  background-color: #f4f5f9;
}
.dials {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6px 0px 7px;
  gap: 4px;
  text-decoration: none;
  position: absolute;
  width: 86px;
  height: 50px;
  left: calc(50% - 86px / 2 + 385px);
  top: 62px;
  color: #2d3b87;
  border-radius: 10px;
}
.sklad {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6px 0px 7px;
  gap: 4px;
  text-decoration: none;
  position: absolute;
  width: 86px;
  height: 50px;
  left: calc(50% - 86px / 2 + 471px);
  top: 60px;
  color: #2d3b87;
  /* White Gray

fill
*/
  border-radius: 10px;
}
.sdelki {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6px 0px 7px;
  gap: 4px;
  text-decoration: none;
  position: absolute;
  width: 86px;
  height: 50px;
  left: calc(50% - 86px / 2 + 557px);
  top: 60px;
  color: #2d3b87;
  border-radius: 10px;
}
</style>
