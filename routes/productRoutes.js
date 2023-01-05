const express = require('express');
const Product = require('../models/product');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('products', { title: 'Products'})
})

module.exports = router;