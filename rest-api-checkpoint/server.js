require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const  app = express()
const connectDB = require('./src/config/mongoose') 
const  Route = require('./src/routes')

connectDB()
const router = express.Router()


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/', Route(router))







mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(4444, () => console.log('Server running on port 4444'))
})