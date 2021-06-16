const router = express.Router();

const products = [
    {
        name: "Milk",
        price: 3.30,
        producer: "Mlekovita"
    },
    {
        name: "Stinky cheese",
        price: 6.30,
        producer: "Stinky cheese i.n.c."
    }
]

router.get('/', (req, res) => {
    res.send(products);
})

router.post('/', (req, res) => {
    console.log(req.body.name);
    const product = req.body;
    products.push(product);

    res.send(`Product with name ${product.name} has been added`);
});

module.exports = router;