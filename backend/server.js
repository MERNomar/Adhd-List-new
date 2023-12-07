const express = require('express')
const app = express()
const mongoose = require('mongoose')
const todoRoutes = require('./routes/todos')

// environment variables 
require('dotenv').config()
const port = process.env.PORT
const mongoLink = process.env.DATABASE_LINK

// middlewares
app.use('*' , (req , res , next) => {
    res.set('Access-Control-Allow-Origin', '*');
    next()
} )
app.use(express.json());
app.use( '/api' ,todoRoutes)

app.listen(port ,() => {
    mongoose.connect(mongoLink)
    .then(() => console.log(`connected to mongo on port ${port}`))
    .catch(e => console.log(e))
 }
)

