<template>
  <li class="products-element">
    <span class="products-element__name">${name}</span>
    <img class="products-element__img" src="${img}" />
    <span class="products-element__price">
                        ⚡️ ${price.toLocaleString()} USD
                    </span>
<!--    <button class="products-element__btn${activeClass}"></button>-->
  </li>
</template>

<script>
export default {
name: "Order",
  props:{
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

.products-element {
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
}
</style>