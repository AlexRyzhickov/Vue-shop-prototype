<template>
  <div id="app">
    <!--    <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!--  <OrderList
      v-bind:orders="orders"
      />-->
    <ProductList
        v-bind:products="products"
    />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// import OrderList from "@/components/OrderList";
import ProductList from "@/components/ProductList";

export default {
  name: 'App',
  data() {
    return {
      products: [
        {code: 1, name: 'SLÅN СЛЁН', price: 45, count: 3, discount: 0.15, img: ''},
        {code: 2, name: 'KLUBBSPORRE КЛУББСПОРРЕ', price: 2999, count: 1, discount: 0.15, img: ''},
        {code: 3, name: 'KRONÄRT КРОНЭРТ', price: 149, count: 1, discount: 0, img: ''},
        {code: 4, name: 'VILDKORN ВИЛЬДКОРН', price: 499, count: 2, discount: 0, img: ''},
        {code: 5, name: 'VÅRTRY ВОРТРИ', price: 999, count: 1, discount: 0, img: ''},
        {code: 6, name: 'SKOGSFRÄKEN СКОГСФРЭКЕН', price: 899, count: 1, discount: 0, img: ''},
        {code: 7, name: 'VILDKORN ВИЛЬДКОРН', price: 399, count: 1, discount: 0, img: ''},
        {code: 8, name: 'VALBJÖRG ВАЛЬБЬЁРГ', price: 199, count: 1, discount: 0, img: ''},
      ]
    }
  },
  components: {
    ProductList,
    // OrderList
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
