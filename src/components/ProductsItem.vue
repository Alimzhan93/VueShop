<template>
  <div class="stock">
    <div class="DataImage">
      <img src="@/assets/image.png" alt="" />
      <div class="data">
        <p style="color: #969dc3">{{ product_data.name }}</p>
        <div class="brus">
          {{ product_data.article }}
        </div>
        <div class="geo">
          <img src="@/assets/Geo.png" alt="" />
        </div>
        <div class="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat
            aperiam nesciunt corrupti eius tempora blanditiis reiciendis, quod
            consectetur officia ullam laborum sapiente? Eveniet, harum assumenda
            expedita iure ipsa reprehenderit.
          </p>
        </div>
      </div>
    </div>
    <div class="sello">
      <div class="price">
        <h2>{{ product_data.price }} ₽</h2>
        <p>
          Количество <br />
          Стоимость за штуку
        </p>
      </div>

      <div class="btn_block">
        <button class="btn btn-primary" @click="addToSdelki">
          Добавить в сделки
        </button>
        <button class="btn_like" @click="addToMycartlist">
          <img src="@/assets/like.png" alt="like" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  emits: ["addToSdelki", "addToMycartlist"],
  name: "ProductsItem",
  props: {
    product_data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    addToSdelki(): void {
      this.$emit("addToSdelki", this.product_data);
    },
    addToMycartlist(): void {
      this.$emit("addToMycartlist", this.product_data);
    },
  },
});
</script>

<style>
.btn_block {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 274px;
  height: 50px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
.btn_like {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px;
  gap: 8px;

  width: 50px;
  height: 50px;

  /* white-gray */

  background: #f4f5f9;
  border-radius: 10px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
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
.data {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  width: 536px;
  height: 266px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 1;
}
.stock {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  margin: 0 auto;
  width: 1166px;
  height: 390px;
  left: 361px;
  top: 275px;

  /* white */

  /* platinum */
}
.DataImage {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;

  width: 835px;
  height: 306px;

  /* white */

  background: #ffffff;
  border-radius: 20px;

  /* Inside auto layout */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #e0e3ee;
  border-radius: 20px;

  flex: none;
  order: 0;
  flex-grow: 0;
}
.brus {
  width: 536px;
  height: 38px;

  /* title/m-v2

15-125-500
*/
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 125%;
  /* or 19px */

  /* Blue Dark */

  color: #2d3b87;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
.geo {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 8px;
  gap: 4px;

  width: 239px;
  height: 23px;

  /* white-gray */

  background: #f4f5f9;
  border-radius: 5px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
}
.text {
  width: 536px;
  height: 64px;

  /* text/m-v3

13-150-400
*/
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 150%;
  /* or 20px */

  /* blue-dark */

  color: #2d3b87;

  /* Inside auto layout */

  flex: none;
  order: 5;
  align-self: stretch;
  flex-grow: 0;
}
.sello {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 12px;

  width: 310px;
  height: 306px;

  /* white */

  background: #ffffff;
  /* platinum */

  border: 1px solid #e0e3ee;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
}
.price {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 274px;
  height: 240px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
}
.price h2 {
  /* title/xl

20-100-500
*/
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  /* identical to box height, or 20px */

  display: flex;
  align-items: center;

  /* Blue Dark */

  color: #2d3b87;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}
.price p {
  width: 238px;
  height: 13px;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 100%;
  /* identical to box height, or 13px */

  /* manatee */

  color: #969dc3;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 1;
}
</style>
