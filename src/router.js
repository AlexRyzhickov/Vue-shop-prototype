import Vue from 'vue'
import Router from "vue-router";
import Shop from "@/views/Shop";
import UserBasket from "@/views/UserBasket";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Shop
        },
        {
            path: '/basket',
            component: UserBasket
        }
    ]
})