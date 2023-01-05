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
    price: {
        type: Number,
        required: true
    },
    ingredients: {
        type: [String]
    },
    notes: {
        type: [String]
    },
    category: {
        type: String,
        required: true
    },
    filling: {
        type: String,
        required: true
    }
}, { timestamps: true});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;