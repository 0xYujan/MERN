const express = require('express')
const { postProduct, productList, productDetails, updateProduct, deleteProduct } = require('../controller/productController')
const { updateCategory } = require('../controller/categoryController')
const { requireAdmin } = require('../controller/authController')
const router = express.Router()
const upload = require('../middleware/file-upload')

router.post('/postproduct', upload.single('product_image') , postProduct)
router.get('/productlist', productList)
router.get('/productdetails/:id', productDetails)
router.put('/productupdate/:id', requireAdmin, updateProduct)
router.delete('/productdelete/:id', requireAdmin, deleteProduct)

module.exports = router