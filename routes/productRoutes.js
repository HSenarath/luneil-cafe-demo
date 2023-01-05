const express = require('express');
const Product = require('../models/product');

const router = express.Router();

router.get('/', (req, res) => {
    Product.find()
    .then(result => {
        res.render('products', { title: 'Products', products: result });
    })
    .catch(err => {
        console.log(err);
    })
})

module.exports = router;