<template>
  <div>
    <router-link to="/basket">Basket</router-link>
    <ProductList
        v-bind:products="getProducts"
        v-bind:codesOfOrders="getCodesOfOrders"
        v-on:add-product="addProductInBasket"
        v-on:remove-product="removeProductInBasket"
    />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList";
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "Shop",
  components: {ProductList},
  computed: {
    ...mapGetters(['getProducts', 'getCodesOfOrders'])
  },
  methods: {
    ...mapActions(['fetchProducts', "fetchBasket", "addOrder", "removeOrder"]),
    addProductInBasket(code) {
      console.log('add product with code ', code)
      this.addOrder(code)
    },
    removeProductInBasket(code) {
      console.log('remove product with code ', code)
      this.removeOrder(code)
    }
  },
  async mounted() {
    this.fetchProducts()

  }
}
</script>

<style scoped>

</style>