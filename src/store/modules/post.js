import axios from "axios";

export default {
    actions: {
        async fetchProducts(ctx) {
            axios.get('http://localhost:3000/product')
                .then(response => (ctx.commit("updateProducts", response.data)))
        },
        async fetchBasket(ctx) {
            axios.get('http://localhost:3000/getBasket')
                .then(response => {
                    ctx.commit("updateBasket", response.data);
                    ctx.commit("updateTotalCost")
                })
        },
        async addOrder(ctx, code) {
            axios.post('http://localhost:3000/addOrder',
                {"code": code}
            )
                .then(response => {
                    console.log('Add order Success ', response)
                    ctx.commit("updateTotalCost")
                })
                .catch(e => {
                    console.log('Add order Fail ', e)
                })
        },
        async removeOrder(ctx, code) {
            axios.post('http://localhost:3000/removeOrder',
                {"code": code}
            )
                .then(response => {
                    console.log('Remove order Success ', response)
                    ctx.commit("updateTotalCost")
                })
                .catch(e => {
                    console.log('Remove order Fail ', e)
                })
        },
        async incrOrderCount(ctx, code) {
            axios.post('http://localhost:3000/incrOrderCount',
                {"code": code}
            )
                .then(response => {
                    console.log('Remove order Success ', response)
                    ctx.commit("updateTotalCost")
                })
                .catch(e => {
                    console.log('Remove order Fail ', e)
                })
        },
        async decrOrderCount(ctx, code) {
            axios.post('http://localhost:3000/decrOrderCount',
                {"code": code}
            )
                .then(response => {
                    console.log('Remove order Success ', response)
                    ctx.commit("updateTotalCost")
                })
                .catch(e => {
                    console.log('Remove order Fail ', e)
                })
        }
    },
    mutations: {
        updateProducts(state, products) {
            state.products = products
        },
        updateBasket(state, basket) {
            state.basket = basket
        },
        updateTotalCost(state) {
            state.totalCost = 0
            for (let order of state.basket) {
                state.totalCost += order.price * (1 - order.discount) * order.count
            }
        },
        addOrderMutation(state, add_order) {
            if (!state.basket.includes(add_order)) {
                state.basket.push(add_order)
                state.basket.sort(function (a, b) {
                    if (a.code > b.code) {
                        return 1;
                    }
                    if (a.code < b.code) {
                        return -1;
                    }
                    return 0;
                })
            }
        },
        removeOrderMutation(state, remove_order) {
            state.basket = state.basket.filter(order => order.code !== remove_order.code)
        },
        changeOrderMutation(state, change_order) {
            for (let order of state.basket) {
                if (order.code === change_order.code) {
                    order.count = change_order.count;
                    break;
                }
            }
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
        ]*/,
        totalCost: 0
    },
    getters: {
        getProducts(state) {
            return state.products
        },
        getBasket(state) {
            return state.basket
        },
        getCodesOfOrders(state) {
            return state.basket.map(order => order.code)
        },
        getTotalCost(state) {
            return state.totalCost.toFixed(2)
        }
    }
}
