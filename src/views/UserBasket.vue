<template>
  <div>
    <router-link to="/">Shop</router-link>
    <OrderList
        v-bind:orders="getBasket"
        v-bind:totalCost="getTotalCost"
        v-on:remove-order="deleteOrder"
        v-on:incr-order-count="increaseOrderCount"
        v-on:decr-order-count="decreaseOrderCount"
    />
  </div>
</template>

<script>
import OrderList from "@/components/OrderList";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "UserBasket",
  components: {OrderList},
  computed: {
    ...mapGetters(['getBasket','getTotalCost'])
  },
  methods: {
    ...mapActions(['fetchBasket', 'removeOrder', 'incrOrderCount', 'decrOrderCount']),
    deleteOrder(code) {
      this.removeOrder(code)
      console.log(this.getTotalCost)
    },
    increaseOrderCount(code) {
      // console.log('incr order with code ', code)
      this.incrOrderCount(code)
      console.log(this.getTotalCost)
    },
    decreaseOrderCount(code) {
      // console.log('decr order with code ', code)
      this.decrOrderCount(code)
      console.log(this.getTotalCost)
    }/*,
    updateTotalCost() {
      this
      console.log(this.totalCost)
    }*/
  },
  async mounted() {
    this.fetchBasket()
  }
}
</script>

<style scoped>

</style>