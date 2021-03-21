const express = require('express')
const cors = require('cors')
const serveStatic = require('serve-static')
const path = require('path')
const bodyParser = require("body-parser")
let products = require("./products.json")
const app = express()
const http = require("http").Server(app);
const io = require("socket.io")(http);

let basket = []


app.use(cors())

app.use(bodyParser.json())
app.use('/', serveStatic(path.join(__dirname, '/dist')))

function addOrder(code) {
    let order = products.filter(product => product.code === code)
    if (!basket.includes(order[0]) && order[0] !== undefined && order[0] !== null) {
        basket.push(order[0])
        emmitAddOrder(order[0]);
    }
}

function emmitAddOrder(data) {
    io.emit('addOrder', {add_order: data})
}

function emmitRemoveOrder(data) {
    io.emit('removeOrder', {remove_order: data})
}

function emmitChangeOrder(data) {
    io.emit('changeOrder', {change_order: data})
}

io.on('connection', function (socket) {
    console.log('A user connected');

    //Send a message when
    setTimeout(function () {
        //Sending an object when emmiting an event
        socket.emit('testerEvent', {description: 'A custom event named testerEvent!'});
    }, 4000);

    /*socket.on('disconnect', function () {
        console.log('A user disconnected');
    });

    socket.on('addOrder', function (data){
        console.log(data)
    });

    socket.on('removeOrder', function (data){
        console.log(data)
    });*/

    // io.emit('newmsg', {message: 'end auction'})
});


// this * route is to serve project on different page routes except root `/`
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})

app.get('/product', (req, res) => {
    res.json(products)
})

app.get('/codesOfOrders', (req, res) => {
    let codesOfOrders = basket.map(order => order.code)
    res.json(codesOfOrders)
})

app.post('/addOrder', (req, res) => {
    // console.log('addOrder ', req.body)
    // basket.push(addOrder(req.body.code)[0])
    addOrder(addOrder(req.body.code))
    console.log('addOrder')
    //console.log(basket)
    res.send({ok: true});
})

app.post('/removeOrder', (req, res) => {
    // console.log('removeOrder ', req.body)
    basket = basket.filter(order => order.code !== req.body.code)
    emmitRemoveOrder(req.body)
    console.log(basket)
    res.send({ok: true});
})

app.post('/incrOrderCount', (req, res) => {
    console.log('incrOrderCount')
    if (req.body.code !== null && req.body.code !== undefined) {
        for (let order of basket) {
            if (order.code === req.body.code) {
                order.count++;
                emmitChangeOrder(order)
                break;
            }
        }
        console.log(basket)
    }
    res.send({ok: true});
})

app.post('/decrOrderCount', (req, res) => {
    console.log('decrOrderCount')
    if (req.body.code !== null && req.body.code !== undefined) {
        for (let order of basket) {
            if (order.code === req.body.code && order.count > 1) {
                order.count--;
                emmitChangeOrder(order)
                break;
            }
        }
        console.log(basket)
    }
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

const port = process.env.PORT || 3000

http.listen(port, () =>
    console.log(`server listening at http://localhost:${port}`)
)
