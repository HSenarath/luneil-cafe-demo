const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: false
    },
    phoneNumber: {
        type: String,
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
            type: [],
            required: true
    },"cheese-cutlet": {
            type: [],
            required: true
    },"chicken-cutlet": {
        type: [],
        required: true
    },"vegetable-roll": {
        type: [],
        required: true
    },"fish-roll": {
        type: [],
        required: true
    },"pork-roll": {
        type: [],
        required: true
    },"fish-patties": {
        type: [],
        required: true
    },"cheese-patties": {
        type: [],
        required: true
    },"chicken-patties": {
        type: [],
        required: true
    },"spinach-pastry": {
        type: [],
        required: true
    },"fish-pastry": {
        type: [],
        required: true
    },"chicken-pastry": {
        type: [],
        required: true
    },"seenisambal-pastry": {
        type: [],
        required: true
    },"chicken-sausage-pastry": {
        type: [],
        required: true
    },"vegetable-roti": {
        type: [],
        required: true
    },"fish-roti": {
        type: [],
        required: true
    },"chicken-roti": {
        type: [],
        required: true
    },
    "special-instructions": {
    type: [String]
    }
}, { timestamps: true});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

