require('dotenv').config();
const mongoose = require('mongoose')

var connectionstring = process.env.MONGO_URI

const connectTomongo = () => {
    mongoose.connect(connectionstring, () => {
        console.log("MongoDB connected succesfully");
    })
}

module.exports = connectTomongo;