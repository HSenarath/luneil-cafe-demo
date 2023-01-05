const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));

app.get('/', (req,res) => {
    console.log("hello");
    res.render('index');
})

// Added 

app.get('/orderform', (req,res) => {
  res.render('orderform');
})

app.get('/products', (req,res) => {
  res.render('products');
})