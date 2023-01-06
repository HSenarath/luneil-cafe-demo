const express = require('express');
const Order = require('../models/order');
const SummarizedOrder = require('../models/summarized-order');


const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Home'})
})

router.get('/order-form', (req, res) => {
    res.render('order-form', { title: 'Order Form'})
})

router.get('/order-history', (req, res) => {
    SummarizedOrder.find().sort({createdAt: -1})
    .then(result => {
        res.render('order-history', {orders: result, title: 'Order History'})
    })
    .catch(err => {
        console.log(err)
    })
   
})

router.get('/order-history', (req,res) => {
    console.log(req)
})

router.post('/order-history', (req,res) => {
    
    const options = ['fish-cutlet', 'cheese-cutlet', 'chicken-cutlet', 'vegetable-roll', 'fish-roll', 'pork-roll', 'fish-patties', 'cheese-patties', 'chicken-patties', 'spinach-pastry', 'fish-pastry', 'chicken-pastry', 'seenisambal-pastry', 'chicken-sausage-pastry', 'vegetable-roti', 'fish-roti', 'chicken-roti']
    let orderList =[]
    
     options.forEach(option => {
        orderList.push(req.body[option])
    }) 

    // remove items with value 0
    orderList = orderList.filter( item => Number(item[0]) > 0)

      // calculate subtotals

    let cutletTot = 0
    let rollTot = 0
    let pattiesTot= 0
    let pastryTot = 0
    let rotiTot = 0

  

    orderList.forEach (item => {
        switch (item[3]){
            case "cutlet":
                cutletTot += Number(item[2])*Number(item[0])
                break;
            case "roll":
                rollTot += Number(item[2])*Number(item[0])
                break;
            case "patties":
                pattiesTot += Number(item[2])*Number(item[0])
                break;
            case "pastry":
                    pastryTot += Number(item[2])*Number(item[0])
                    break;
            case "roti":
                    rotiTot += Number(item[2])*Number(item[0])
                        break;

        }
    })

    //consolelog subtotals 
    const total = cutletTot+rollTot+pattiesTot+pastryTot+rotiTot
    const {firstName, lastName, phoneNumber, pickupDate, pickupTime} = req.body
   

    const newOrder = new SummarizedOrder({ 
        firstName,
        lastName,
        phoneNumber,
        pickupDate,
        pickupTime,
        items : orderList,
        total
    })
    newOrder.save()
    .then(result => {
        res.redirect('/order-history')
    })
    .catch(err => {
        console.log(err)
    })

    
});




// router.get('/customer-list', (req, res) => {
//     res.render('customer-list', { title: 'Customer List'})
// })

module.exports = router;
  