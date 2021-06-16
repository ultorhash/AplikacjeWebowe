// [START SERVER COMMAND]: NODE_ENV=something node server.ts

const express = require('express')
const path = require('path')
const ejs = require('ejs')
const bodyParser = require('body-parser')

const app = express()
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const server = app.listen(4000, ()=>{
    console.log("Server is listening")
})

let product = {};

let products = [
    {
        id: 1,
        name: "Milk",
        price: 3.50,
        producer: "Mlekowita"
    },
    {
        id: 2,
        name: "Cheese",
        price: 8.50,
        producer: "Polmlek"
    }
]

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/products', (req, res) => {
    res.send(products);
});

app.post('/products', (req, res) => {
    products.push(req.body);
});

app.get('/products/:id', (req, res) => {
    let productId = +(req.params.id.substr(1));
    products = products.filter(p => {
        return p.id === productId;
    });

    res.json(products);
});

app.delete('/products/:id', (req, res) => {

    let productId = +(req.params.id.substr(1));
    products = products.filter(p => {
        return p.id !== productId;
    });

    res.json(products);
});

app.patch('/products', (req, res) => {
    products = products.filter(p => {
        return p.id !== +(req.body.id);
    });

    let newProduct = {
        id: +(req.body.id),
        name: req.body.name,
        price: req.body.price,
        producer: req.body.producer
    }

    products.push(newProduct);
    res.send(products);
});