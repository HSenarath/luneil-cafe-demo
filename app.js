const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const productRoutes = require('./routes/productRoutes');
const cafeRoutes = require('./routes/cafeRoutes');

const app = express();

let PORT = process.env.PORT || 5002;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {

    app.listen(PORT, () => {
      console.log('server is listening on port 3000')
    })
  })
  .catch((err)=> console.log(err))


app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json())


app.use('/products', productRoutes);
app.use('/', cafeRoutes);