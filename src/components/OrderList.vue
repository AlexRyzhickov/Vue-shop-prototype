<template>
  <div class="elements_container">
    <ul class="orders-container">
      <Order
          v-for="(order) of orders" :key="order.code"
          v-bind:order="order"
          v-on:remove-order="removeOrder"
          v-on:incr-order-count="incrOrderCount"
          v-on:decr-order-count="decrOrderCount"
      />
    </ul>
    <div style="margin-top: 20px; margin-right: 45px; align-items: flex-start">
      <span>Номер заказа: 2159886</span>
      <hr>
      <p>Сумма заказа {{totalCost}} ₽</p>
      <hr>
    </div>
  </div>
</template>

<script>
import Order from "@/components/Order";

export default {
  name: "OrderList",
  props: ['orders','totalCost'],
  components: {Order},
  // data(){
  //   return{
  //     totalCost: 0
  //   }
  // }
  /*,
  watch :{
   totalCost(value){
     console.log(value)
   },
    orders(value){

    }
  }*/
  /*watch: {
    orders(value){
      console.log(value)
    }
  }*/
  methods: {
    removeOrder(code) {
      // console.log(id)
      this.$emit('remove-order', code)
      //this.totalCost++
    },
    incrOrderCount(code) {
      this.$emit('incr-order-count', code)
      //this.totalCost++
    },
    decrOrderCount(code) {
      this.$emit('decr-order-count', code)
      //this.totalCost++
    }
  }
}
</script>

<style scoped>
.orders-container {
  display: grid;
  /*grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));*/
  grid-gap: 45px;
  width: 60%;
  max-width: 1000px;
  margin: 30px auto;
}

.elements_container {
  display: flex;
}

/*.products-element {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 25px 20px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 16px 24px 2px rgba(33,37,41,.02),
  0 6px 30px 5px rgba(33,37,41,.04),
  0 8px 10px -5px rgba(33,37,41,.1);;
}
.products-element__name {
  margin-bottom: auto;
  font-weight: bold;
}
.products-element__img {
  width: 100%;
  height: 270px;
  margin-top: 15px;
  object-fit: contain;
}
.products-element__price {
  margin-top: 15px;
  color: #808080;
}
.products-element__btn {
  margin-top: 15px;
  padding: 10px 15px;
  border: 1px solid #808080;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  background: none;
  font-family: inherit;
  font-size: inherit;
}
.products-element__btn_active {
  border: 1px solid transparent;
  background-image: linear-gradient(to right, #e2f87c, #d6f567, #c8f151, #b9ee38, #a8eb12);
}*/
</style>