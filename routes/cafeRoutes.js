const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Homepage'})
})

router.get('/order-form', (req, res) => {
    res.render('order-form', { title: 'Order Form'})
})

router.get('/order-history', (req, res) => {
    res.render('order-history', { title: 'Order History'})
})

// router.get('/customer-list', (req, res) => {
//     res.render('customer-list', { title: 'Customer List'})
// })

module.exports = router;