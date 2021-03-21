<template>
  <div id="app">
    <h2>Pillow Shop</h2>
    <hr>
    <router-view/>
  </div>
</template>


<script>
import {mapActions, mapMutations} from 'vuex'

export default {
  sockets: {
    connect: function () {
      console.log('socket to notification channel connected')
    }
  },
  methods: {
    ...mapActions(['fetchProducts','fetchProducts']),
    ...mapMutations(['addOrderMutation', 'removeOrderMutation', 'changeOrderMutation', 'updateTotalCost'])
  }
  ,
  created() {
    this.sockets.subscribe('testerEvent', (data) => {
      console.log(data)
    });
    this.sockets.subscribe('addOrder', (data) => {
      this.addOrderMutation(data.add_order)
      this.updateTotalCost()
      // console.log(data)
    });
    this.sockets.subscribe('removeOrder', (data) => {
      this.removeOrderMutation(data.remove_order)
      this.updateTotalCost()
    });
    this.sockets.subscribe('changeOrder', (data) => {
      this.changeOrderMutation(data.change_order)
      this.updateTotalCost()
    });
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
