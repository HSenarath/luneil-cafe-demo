const express = require('express');
const Order = require('../models/order');

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

router.post('/order-history', (req,res) => {
    const newOrder = new Order(req.body)
    newOrder.save()
    .then( result => {
        res.redirect('/order-history')
    })
    .catch(err => {
        console.log(err)
    })
})

// router.get('/customer-list', (req, res) => {
//     res.render('customer-list', { title: 'Customer List'})
// })

module.exports = router;