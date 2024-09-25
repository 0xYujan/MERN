const express = require('express')
const { postOrder, orderList, orderDetails, updateStatus, userOrders } = require('../controller/orderController')
const router = express.Router()


router.post('/postorder', postOrder)
router.get('/orderlist', orderList)
router.get('/orderDetails/:id', orderDetails)
router.put('/updatestatus/:id', updateStatus)
router.get('/userorderlist/:userId', userOrders)


module.exports = router