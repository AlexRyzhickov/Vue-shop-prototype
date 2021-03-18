<template>
  <div>
    <router-link to="/">Shop</router-link>
    <OrderList
        v-bind:orders="getBasket"
        v-on:remove-order="removeOrder"
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
    ...mapGetters(['getBasket'])
  },
  methods: {
    ...mapActions(['fetchBasket']),
    removeOrder(code) {
      console.log(code)
    }
  },
  async mounted() {
    this.fetchBasket()
    // console.log('basket !')
  }
}
</script>

<style scoped>

</style>