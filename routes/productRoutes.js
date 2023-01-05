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
        res.render('product-details', { title: 'Products', product: result[0] }); 
      })
      .catch(err => {
        console.log(err);
      });
  });


module.exports = router;