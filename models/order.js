const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true 
    },
    pickupDate: {
        type: String,
        required: true
    },
    pickupTime: {
        type: String,
        required: true
    }, "fish-cutlet": {
        type: Number,
        required: true
    },"cheese-cutlet": {
        type: Number,
        required: true
    },"chicken-cutlet": {
        type: Number,
        required: true
    },"vegetable-roll": {
        type: Number,
        required: true
    },"fish-roll": {
        type: Number,
        required: true
    },"pork-roll": {
        type: Number,
        required: true
    },"fish-patties": {
        type: Number,
        required: true
    },"cheese-patties": {
        type: Number,
        required: true
    },"chicken-patties": {
        type: Number,
        required: true
    },"spinach-pastry": {
        type: Number,
        required: true
    },"fish-pastry": {
        type: Number,
        required: true
    },"chicken-pastry": {
        type: Number,
        required: true
    },"seenisambal-pastry": {
        type: Number,
        required: true
    },"chicken-sausage-pastry": {
        type: Number,
        required: true
    },"vegetable-roti": {
        type: Number,
        required: true
    },"fish-roti": {
        type: Number,
        required: true
    },"chicken-roti": {
        type: Number,
        required: true
    }, "special-instructions": {
        type: [String]
    },

}, { timestamps: true});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;


