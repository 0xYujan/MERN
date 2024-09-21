const express = require('express')
const { postProduct, productList, productDetails, updateProduct, deleteProduct } = require('../controller/productController')
const { updateCategory } = require('../controller/categoryController')
const router = express.Router()

router.post('/postproduct', postProduct)
router.get('/productlist', productList)
router.get('/productdetails/:id', productDetails)
router.put('/productupdate/:id', updateProduct)
router.delete('/productdelete/:id', deleteProduct)

module.exports = router