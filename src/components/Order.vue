<template>
  <div>
    <li class="order-element" v-if=isShowFreeProduct>
      <span style="margin-left: 25px; width:50px">{{ order.code }}</span>
      <span style="margin-left: 25px; width:150px; text-align: left">{{ order.name }}</span>

      <template>
        <div class="prices_style_div" style="width: 150px">
          <span class="products-element__price">Бесплатный товар</span>
        </div>
      </template>

      <span style="margin-left: 25px; width:30px; text-align: left">{{ Math.floor(order.count / 2) }}</span>

      <button class="product-element-btn" style="opacity: 0;">+</button>
      <button class="product-element-btn" style="opacity: 0;">-</button>

      <template>
        <div class="prices_style_div" style="width: 150px">
          <span class="products-element__price">Бесплатный товар</span>
        </div>
      </template>

      <button class="product-element-btn" style="opacity: 0;">&times;</button>
    </li>
    <li class="order-element">
      <span style="margin-left: 25px; width:50px">{{ order.code }}</span>
      <span style="margin-left: 25px; width:150px; text-align: left">{{ order.name }}</span>

      <template v-if=order.discount>
        <div class="prices_style_div" style="width: 150px">
          <p class="products-element__price">{{ fixedPrices(order.price * (1 - order.discount)) }} ₽ </p>
          <p class="products-element__price price-through">{{ fixedPrices(order.price) }} ₽</p>
        </div>
      </template>
      <template v-else>
        <div class="prices_style_div" style="width: 150px">
          <span class="products-element__price">{{ fixedPrices(order.price) }} ₽</span>
        </div>
      </template>

      <span style="margin-left: 25px; width:30px; text-align: left">{{ order.count }}</span>

      <button class="product-element-btn" v-on:click="incrCount">+</button>
      <button class="product-element-btn" v-on:click="decrCount">-</button>

      <template v-if=order.discount>
        <div class="prices_style_div" style="width: 150px">
          <p class="products-element__price">{{ fixedPrices(order.price * (1 - order.discount) * order.count) }}
            ₽ </p>
          <p class="products-element__price price-through">{{ fixedPrices(order.price * order.count) }} ₽</p>
        </div>
      </template>
      <template v-else>
        <div class="prices_style_div" style="width: 150px">
          <span class="products-element__price">{{ fixedPrices(order.price * order.count) }} ₽</span>
        </div>
      </template>

      <button class="product-element-btn" v-on:click="$emit('remove-order', order.code)">&times;</button>
    </li>
  </div>
</template>

<script>
export default {
  name: "Order",
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  methods: {
    incrCount() {
      this.order.count++;
      this.$emit('incr-order-count', this.order.code)
    },
    decrCount() {
      if (this.order.count > 1) {
        this.order.count--;
        this.$emit('decr-order-count', this.order.code)
      }
    },
    fixedPrices(value) {
      return value.toFixed(2)
    }
  },
  computed: {
    isShowFreeProduct() {
      return this.order.dynamic_discount && this.order.count>=2;
    }
  }
}
</script>

<style scoped>

.order-element {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 25px 20px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 16px 24px 2px rgba(33, 37, 41, .02),
  0 6px 30px 5px rgba(33, 37, 41, .04),
  0 8px 10px -5px rgba(33, 37, 41, .1);;
}

.prices_style_div {
  margin-left: 25px;
  width: 150px;
}

.products-element__price {
  margin-top: 15px;
  color: #808080;
}

.price-through {
  text-decoration: line-through;
}

.product-element-btn {
  margin-left: 35px;
  padding: 10px 15px;
  border: 1px solid #808080;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  background: none;
  font-family: inherit;
  font-size: inherit;
}

</style>