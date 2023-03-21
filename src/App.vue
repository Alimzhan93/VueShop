<template>
  <div class="header">
    <div class="top"></div>

    <router-link class="dials" to="/mycartlist"
      >Избраное{{ countofcartproduct }}</router-link
    >
    <router-link class="sklad" to="/">Склад</router-link> |
    <router-link class="sdelki" to="/sdelki">Сделки</router-link>
    |
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
export default defineComponent({
  computed: {
    ...mapGetters(["countofcartproduct"]),
  },
  components: {},
});
</script>

<style>
.header {
  width: 1200px;
  height: 110px;
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
.dials {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6px 0px 7px;
  gap: 4px;

  position: absolute;
  width: 86px;
  height: 50px;
  left: calc(50% - 86px / 2 + 385px);
  top: 60px;

  border-radius: 10px;
}
.sklad {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6px 0px 7px;
  gap: 4px;

  position: absolute;
  width: 86px;
  height: 50px;
  left: calc(50% - 86px / 2 + 471px);
  top: 60px;

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

  position: absolute;
  width: 86px;
  height: 50px;
  left: calc(50% - 86px / 2 + 557px);
  top: 60px;

  border-radius: 10px;
}
</style>
