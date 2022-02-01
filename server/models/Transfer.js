const mongoose = require("mongoose")

const transferSchema = new mongoose.Schema({
    sender: {
        type: String,
        required: true
    },
    reciever: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    funds: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Transfer', transferSchema)