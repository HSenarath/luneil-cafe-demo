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

router.get('/:category/:filling', (req, res) => {
    console.log(req)
    const category = req.params.category;
    const filling = req.params.filling;
    Product.find({category: category, filling: filling})
      .then(result => {
        console.log(result)
        // we are grabbing the first item in the result array because the array only has one item, which is the product
        // object of interest
        res.render('product-details', { title: 'Products', product: result[0] });
      })
      .catch(err => {
        console.log(err);
      });
  });


module.exports = router;