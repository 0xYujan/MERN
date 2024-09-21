const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const productSchema = new mongoose.Schema({
    product_name:{
        type:String,
        required:true,
        trim:true

    },
    product_price:{
        type:Number,
        requierd:true,
        trim:true
    },
    countInStock:{
        type:Number,
        requierd:true
      
    },
    product_description:{
        type:String,
        required:true,
        trim:true
    },
    product_image:{
        type:String,
        requierd:true
    },
    product_rating:{
        type:Number,
        default:0,
        max:5
    },
    category:{
        type:ObjectId,
        requierd:true,
        ref:'Category'
    }
},{timestamps:true})

module.exports = mongoose.model('Product', productSchema)