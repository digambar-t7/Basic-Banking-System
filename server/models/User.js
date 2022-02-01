const mongoose = require("mongoose")
const { Schema } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    acc: {
        type: String,
        required: true
    },
    ifsc: {
        type: String,
        required: true
    },
    bal: {
        type: Number,
        required: true
    },
    pin: {
        type: Number,
        required: true
    }
})

const User = mongoose.model("user", userSchema)

User.createIndexes()

module.exports = User