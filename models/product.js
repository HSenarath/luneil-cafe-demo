const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageURL: {
        type: String
    },
    choice: { 
        type: [{filling: String, price: Number}],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    ingredients: {
        type: [String]
    },
    notes: {
        type: [String]
    }
}, { timestamps: true});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;