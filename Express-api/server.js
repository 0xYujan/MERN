const express = require('express')
require('dotenv').config()
require('./db/connection')
const bodyParser = require('body-parser')


const testRoute = require('./routes/testRoute')
const categoryRoute = require('./routes/categoryRoute')
const productRoute = require('./routes/productRoute')
const authRoute = require('./routes/authRoute')


const app = express()


//get, post, put, patch, delete

// app.get('/test', (req, res)=>{
//     res.send('This is a API server')
// })

//middleware
app.use(bodyParser.json())

// Routes 
app.use('/api', testRoute)
app.use('/api', categoryRoute)
app.use('/api', productRoute)
app.use('/api', authRoute)


port = process.env.PORT || 8000


//Listen to the port
app.listen(port,() =>{
    console.log(`Server started on port ${port}`)
})