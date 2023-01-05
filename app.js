const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

app.set('view engine', 'ejs');