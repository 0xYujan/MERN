const OrderItem = require('../models/orderItemModel')
const Order = require('../models/orderItemModel')

// post order 
exports.postOrder = async(req, res)=>{
    const orderItemIds = Promise.all(req.body.orderItems.map(async orderItem =>{
        let newOrderItem = new OrderItem({
            quantity:orderItem.quantity,
            product:orderItem.product
        })
        newOrderItem = await OrderItem.save()
        return newOrderItem._id
    }))
    const orderItemIdsResolved = await orderItemIds
    // Calculating total price

    const totalAmount = await Promise.all(orderItemIdsResolved.map(async orderId =>{
        const itemOrder = await OrderItem.findById(orderId).populate('product', 'product_price')
        const total = itemOrder.quantity * itemOrder.product.product_price
        return total 
    }))

    //totalAmount[400,500,700,6000]

    const totalPrice = totalAmount.reduce((a,b)=>a+b, 0)

    // save data
    let order = new Order({
        orderItems: orderItemIdsResolved,
        shippingAddress1: req.body.shippingAddress1,
        shippingAddress2: req.body.shippingAddress2,
        city: req.body.city,
        zip: req.body.zip,
        phone: req.body.phone,
        country: req.body.country,
        TotalPrice: totalPrice,
        user: req.body.user
    })
    order = await order.save()
    if(!order){
        return res.status(400).json({error:'somthing went wrong'})
    }
    res.send(order)
}