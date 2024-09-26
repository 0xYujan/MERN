const express = require('express')
require('dotenv').config()
require('./db/connection')
const bodyParser = require('body-parser')
const morgan = require('morgan')


const categoryRoute = require('./routes/categoryRoute')
const productRoute = require('./routes/productRoute')
const authRoute = require('./routes/authRoute')
const orderRoute = require('./routes/orderRoute')
const cors = require('cors')


const app = express()


//get, post, put, patch, delete

// app.get('/test', (req, res)=>{
//     res.send('This is a API server')
// })

//middleware
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use('/public/uploads', express.static('public/uploads'))
app.use(cors())

// Routes 
app.use('/api', categoryRoute)
app.use('/api', productRoute)
app.use('/api', authRoute)
app.use('/api', orderRoute)


port = process.env.PORT || 8000


//Listen to the port
app.listen(port,() =>{
    console.log(`Server started on port ${port}`)
})