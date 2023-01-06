const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const summarizedOrderSchema = new Schema({
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
    }, items : {
        type: [],
        required: true
    }, total : {
        type: Number,
        required: true
    },
    "special-instructions": {
    type: [String]
    }
}, { timestamps: true});

const SummerizedOrder = mongoose.model('SummarizedOrder', summarizedOrderSchema);

module.exports = SummerizedOrder;