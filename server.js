const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const bodyParser = require("body-parser")
let products = require("./products.json")
const app = express()

let basket = []

function addOrder(code) {
    let order = products.filter(product => product.code === code)
    if (!basket.includes(order[0]) && order[0] !== undefined && order[0] !== null) {
        basket.push(order[0])
    }
}

app.use(bodyParser.json())
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// this * route is to serve project on different page routes except root `/`
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})

app.get('/product', (req, res) => {
    res.json(products)
})

app.post('/addOrder', (req, res) => {
    // console.log('addOrder ', req.body)
    // basket.push(addOrder(req.body.code)[0])
    addOrder(addOrder(req.body.code))
    console.log(basket)
    res.send({ok: true});
})

app.post('/removeOrder', (req, res) => {
    // console.log('removeOrder ', req.body)
    basket = basket.filter(order => order.code !== req.body.code)
    console.log(basket)
    res.send({ok: true});
})

app.get('/getBasket', (req, res) => {
    console.log('getBasket')
    console.log(basket.sort(function (a, b) {
        if (a.code > b.code) {
            return 1;
        }
        if (a.code < b.code) {
            return -1;
        }
        // a должно быть равным b
        return 0;
    }))
    res.json(basket)
})

const port = process.env.PORT || 8080

app.listen(port, () =>
    console.log(`server listening at http://localhost:${port}`)
)


