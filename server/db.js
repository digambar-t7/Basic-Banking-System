const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/BankApp?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectToMongo = async () => {
    mongoose.connect(url, () => {
        console.log("Successfully connected to MongoDB")
    })
}

module.exports = connectToMongo;