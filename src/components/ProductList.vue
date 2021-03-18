<template>
  <div>

    <ul class="products-container">
      <Product
          v-for="(product) of products" :key="product.code"
          v-bind:product="product"
          v-bind:codesOfOrders="getCodeOfOrsers"
          v-on:add-product="addProduct"
          v-on:remove-product="removeProduct"
      />
    </ul>
  </div>
</template>

<script>
import Product from "@/components/Product";

export default {
  name: "ProductList",
  props: ['products', 'basket'],
  components: {Product},
  computed: {
    getCodeOfOrsers() {
      return this.basket.map(order => order.code)
    }
  },
  methods: {
    addProduct(code) {
      this.$emit('add-product', code)
    },
    removeProduct(code) {
      this.$emit('remove-product', code)
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
.products-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 45px;
  width: 80%;
  max-width: 1200px;
  margin: 30px auto;
}
</style>