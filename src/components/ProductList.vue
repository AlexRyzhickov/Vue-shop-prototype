<template>
  <div>

    <ul class="products-container">
      <Product
          v-for="(product) of products" :key="product.code"
          v-bind:product="product"

      />
    </ul>
  </div>
</template>

<script>
import Product from "@/components/Product";
export default {
name: "ProductList",
  props: ['products'],
  components: {Product}
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