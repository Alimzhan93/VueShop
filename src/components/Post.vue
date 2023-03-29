<template>
  <div class="post">
    <div class="item">
      <div class="frame">
        <div class="HorizontalMenu">
          <a
            v-for="option in options"
            :key="option.value"
            @click="selectOptions(option)"
          >
            {{ option.name }}
          </a>
        </div>
      </div>
    </div>

    <input class="input" type="text" />
    <button class="btn">
      <img src="@/assets/search.png" alt="search" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Post",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  setup() {
    return {};
  },
  methods: {
    selectOptions(option: any) {
      this.$emit("select", option);
    },
  },
});
</script>

<style scoped>
a {
  text-decoration: none;
  color: #2d3b87;
}
.frame {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  gap: 10px;
  width: 304px;
  height: 22px;
  /* white-gray */
  background: #f4f5f9;
  /* platinum */
  border: 1px solid #e0e3ee;
  border-radius: 10px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
.post {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  margin: 0 auto;
  gap: 12px;
  width: 1200px;
  height: 48px;
  left: 344px;
  top: 187px;
}
.HorizontalMenu :hover {
  background-color: #f4f5f9;
}
.item {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 22px;
  width: 800px;
  height: 40px;
  color: #969dc3;
  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 1;
}

.frame {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  gap: 10px;

  width: 304px;
  height: 22px;

  /* white-gray */

  background: #f4f5f9;
  /* platinum */

  border: 1px solid #e0e3ee;
  border-radius: 10px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}
.HorizontalMenu {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 18px;
  font-size: 15px;
  width: 300px;
  height: 15px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}
.input {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 4px 20px 20px;
  gap: 8px;

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
