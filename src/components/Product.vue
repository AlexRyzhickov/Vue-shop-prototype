<template>

  <li class="products-element">
    <span class="products-element__name">{{ product.name }}</span>
    <img class="products-element__img" src="../assets/slan-slyon-podushka-myagkaya__0887043_pe682265_s5.png"/>
    <div class="prices_style_div">
      <template v-if=product.discount>
        <span class="products-element__price">⚡️  {{ product.price * (1 - product.discount) }} ₽   </span>
        <span class="products-element__price price-through">{{ product.price }} ₽</span>
      </template>
      <template v-else>
        <span class="products-element__price">{{ product.price }} ₽</span>
      </template>

    </div>
<!--    class="products-element__btn"-->
<!--    v-bind:class="{productElementBtn: !isAddInBasket}-->
<!--    v-bind:class="cravings"-->
    <button class="product-element-btn" v-bind:class="{productElementBtnActive: isAddInBasket}"
    v-on:click="isAddInBasket=!isAddInBasket">Добавить в корзину</button>
  </li>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: {
      type: Object,
      required: true
    },
  },
  data(){
    return {
      isAddInBasket: false
    }
  },
  methods: {}
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

.prices_style_div {
  margin-top: 15px;
  display: inline-block;
}

.products-element {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 25px 20px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 16px 24px 2px rgba(33, 37, 41, .02),
  0 6px 30px 5px rgba(33, 37, 41, .04),
  0 8px 10px -5px rgba(33, 37, 41, .1);;
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

.price-through {
  text-decoration: line-through;
}

.product-element-btn{
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

.productElementBtnActive {
  border: 1px solid transparent;
  /*background-image: linear-gradient(to right, #676767, #676767, #676767, #676767, #676767);*/
  background: #808080;
  color: white;
}
</style>