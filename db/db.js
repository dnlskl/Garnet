require('dotenv').config()
const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URI
mongoose.connect(MONGO_URI, {useNewUrlParser: true}, (err) => {
    if(!err) {
        console.log('Connection to mongo successful')
    }
    else {
        console.log('Connection to mongo error')
        console.log(err)
    }
})