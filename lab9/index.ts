const bodyParser = require('body-parser');
const express = require('express');
const productsRoutes = require('./routes/products.js');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', productsRoutes);

app.get('/', (req, res) => {
    
    res.send('Hello from homepage.');
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});