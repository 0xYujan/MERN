const OrderItem = require("../models/orderItemModel");
const Order = require("../models/orderModel");

// post order
exports.postOrder = async (req, res) => {
  try {
    // Create order items and save them to the database
    const orderItemIds = await Promise.all(
      req.body.orderItems.map(async (orderItem) => {
        let newOrderItem = new OrderItem({
          quantity: orderItem.quantity,
          product: orderItem.product,
        });
        newOrderItem = await newOrderItem.save(); // Fixed here
        return newOrderItem._id;
      })
    );

    // Calculate total price
    const totalAmount = await Promise.all(
      orderItemIds.map(async (orderId) => {
        const itemOrder = await OrderItem.findById(orderId).populate(
          "product",
          "product_price"
        );
        const total = itemOrder.quantity * itemOrder.product.product_price;
        return total;
      })
    );

    const totalPrice = totalAmount.reduce((a, b) => a + b, 0);

    // Save the order
    let order = new Order({
      orderItems: orderItemIds,
      shippingAddress1: req.body.shippingAddress1,
      shippingAddress2: req.body.shippingAddress2,
      city: req.body.city,
      zip: req.body.zip,
      phone: req.body.phone,
      country: req.body.country,
      TotalPrice: totalPrice,
      user: req.body.user,
    });

    order = await order.save();
    if (!order) {
      return res.status(400).json({ error: "Something went wrong" });
    }
    res.send(order);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// order list
exports.orderList = async (req, res) => {
  const order = await Order.find()
    .populate("user", "name")
    .sort({ createdAt: -1 }); // decending order
  if (!order) {
    return res.status(400).json({ error: "somthing went wrong" });
  }
  res.send(order);
};

//order details

exports.orderDetails = async (req, res) => {
  const order = await Order.findById(req.params.id)
    .populate("user", "name")
    .populate({
      path: "orderItems",
      populate: {
        path: "product",
        populate: "category",
      },
    });
  if (!order) {
    return res.status(400).json({ error: "sonting went wrong" });
  }
  res.send(order);
};

//update status
exports.updateStatus = async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  if (!order) {
    return res.status(400).json({ error: "sonting went wrong" });
  }
  res.send(order);
};

//specific user order list
exports.userOrders = async (req, res) => {
  const userOrderList = await Order.find({ user: req.params.userId })
    .populate({
      path: "orderItems",
      populate: {
        path: "product",
        populate: "category",
      },
    })
    .sort({ createdAt: -1 });
  if (!userOrderList) {
    return res.status(400).json({ error: "sonting went wrong" });
  }
  res.send(userOrderList);
};

//delete order
exports.deleteOrder = async(req, res)=>{
    Order.findByIdAndDelete(req.params.id).then(async order =>{
        if(order){
            order.orderItems.map(async orderItem =>{
                await OrderItem.findByIdAndDelete(orderItem)
            })
            return res.json({msg: 'order deleted'})

        }else{
            return res.status(400).json({error:'failed to deleted'})
        }
    })
    .catch(err=>{
        return res.status(400).json({error:err})
    })
}