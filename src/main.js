import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from "@/router";
import VueSocketIO from 'vue-socket.io'
// import Vuetify from 'vuetify'
// import * as io from 'socket.io-client'

Vue.config.productionTip = false

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}))

// Vue.use(Vuetify)
// Vue.use(VueSocketIO, io('http://localhost:3000'), store)

// Vue.use(Vuetify)
// Vue.use(VueSocketIO, io('http://localhost:3000'), store)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
