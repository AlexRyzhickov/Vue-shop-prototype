import axios from "axios";

export default {
    actions: {
        async fetchProducts(ctx) {
            axios.get('/product')
                .then(response => (ctx.commit("updateProducts", response.data)))
        },
        async addOrder(ctx, code) {
            axios.post('/addOrder',
                {"code": code}
            )
                .then(response => {
                    console.log('Add order Success ', response)
                })
                .catch(e => {
                    console.log('Add order Fail ', e)
                })
        },
        async removeOrder(ctx, code) {
            axios.post('/removeOrder',
                {"code": code}
            )
                .then(response => {
                    console.log('Remove order Success ', response)
                })
                .catch(e => {
                    console.log('Remove order Fail ', e)
                })
        },
        async fetchBasket(ctx) {
            axios.get('/getBasket')
                .then(response => (ctx.commit("updateBasket", response.data)))
        }
    },
    mutations: {
        updateProducts(state, products) {
            state.products = products
        },
        updateBasket(state, basket) {
            state.basket = basket
        }
    },
    state: {
        products: [],/* [
            {code: 1, name: 'SLÅN СЛЁН', price: 45, count: 3, discount: 0.15, img: ''},
            {code: 2, name: 'KLUBBSPORRE КЛУББСПОРРЕ', price: 2999, count: 1, discount: 0.15, img: ''},
            {code: 3, name: 'KRONÄRT КРОНЭРТ', price: 149, count: 1, discount: 0, img: ''},
            {code: 4, name: 'VILDKORN ВИЛЬДКОРН', price: 499, count: 2, discount: 0, img: ''},
            {code: 5, name: 'VÅRTRY ВОРТРИ', price: 999, count: 1, discount: 0, img: ''},
            {code: 6, name: 'SKOGSFRÄKEN СКОГСФРЭКЕН', price: 899, count: 1, discount: 0, img: ''},
            {code: 7, name: 'VILDKORN ВИЛЬДКОРН', price: 399, count: 1, discount: 0, img: ''},
            {code: 8, name: 'VALBJÖRG ВАЛЬБЬЁРГ', price: 199, count: 1, discount: 0, img: ''},
        ],*/
        basket: []/*, [
            {code: 1, name: 'SLÅN СЛЁН', price: 45, count: 3, discount: 0.15, img: ''},
            {code: 2, name: 'KLUBBSPORRE КЛУББСПОРРЕ', price: 2999, count: 1, discount: 0.15, img: ''},
            {code: 3, name: 'KRONÄRT КРОНЭРТ', price: 149, count: 1, discount: 0, img: ''},
            /!*{code: 4, name: 'VILDKORN ВИЛЬДКОРН', price: 499, count: 2, discount: 0, img: ''},
            {code: 5, name: 'VÅRTRY ВОРТРИ', price: 999, count: 1, discount: 0, img: ''},
            {code: 6, name: 'SKOGSFRÄKEN СКОГСФРЭКЕН', price: 899, count: 1, discount: 0, img: ''},
            {code: 7, name: 'VILDKORN ВИЛЬДКОРН', price: 399, count: 1, discount: 0, img: ''},
            {code: 8, name: 'VALBJÖRG ВАЛЬБЬЁРГ', price: 199, count: 1, discount: 0, img: ''},*!/
        ]*/
    },
    getters: {
        getProducts(state) {
            return state.products
        },
        getBasket(state) {
            return state.basket
        }
    }
}
