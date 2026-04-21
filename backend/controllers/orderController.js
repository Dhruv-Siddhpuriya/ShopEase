const Order = require('../models/Order');
const Product = require('../models/Product');
const Razorpay = require('razorpay');
const crypto = require('crypto');

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        totalAmount,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
        res.status(400);
        throw new Error('No order items');
    } else {
        const order = new Order({
            items: orderItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            totalAmount,
        });

        const createdOrder = await order.save();

        // Decrease stock for each ordered item
        for (const item of orderItems) {
            const product = await Product.findById(item.product);
            if (product) {
                // Ensure stock doesn't go below 0 purely defensively
                product.stock = Math.max(0, product.stock - item.quantity);
                await product.save();
            }
        }

        res.status(201).json(createdOrder);
    }
};

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
        'user',
        'name email'
    );

    if (order) {
        // Check if the user is an admin or if the order belongs to the user
        if (req.user.role === 'admin' || order.user._id.toString() === req.user._id.toString()) {
            res.json(order);
        } else {
            res.status(401);
            throw new Error('Not authorized to view this order');
        }
    } else {
        res.status(404);
        throw new Error('Order not found');
    }
};

// @desc    Update order to paid
// @route   PUT /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
        if (req.body.razorpay_payment_id) {
            const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
            const sign = razorpay_order_id + '|' + razorpay_payment_id;
            const expectedSign = crypto
                .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
                .update(sign.toString())
                .digest('hex');

            if (razorpay_signature !== expectedSign) {
                res.status(400);
                throw new Error('Invalid payment signature');
            }
            order.paymentResult = {
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
            };
        }

        order.isPaid = true;
        order.paidAt = Date.now();

        const updatedOrder = await order.save();

        res.json(updatedOrder);
    } else {
        res.status(404);
        throw new Error('Order not found');
    }
};

// @desc    Create Razorpay Order
// @route   POST /api/orders/razorpay
// @access  Private
const createRazorpayOrder = async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });

        const options = {
            amount: req.body.amount * 100, // amount in smallest currency unit
            currency: 'INR',
            receipt: 'receipt_order_' + Date.now() + Math.random().toString(36).substring(7),
        };

        const order = await instance.orders.create(options);
        if (!order) {
            res.status(500);
            throw new Error('Some error occured while generating Razorpay order');
        }
        res.json(order);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
};

// @desc    Update order to delivered
// @route   PUT /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
        order.status = 'Delivered';
        const updatedOrder = await order.save();
        res.json(updatedOrder);
    } else {
        res.status(404);
        throw new Error('Order not found');
    }
};

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.json(orders);
};

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getOrders = async (req, res) => {
    const orders = await Order.find({}).populate('user', 'id name');
    res.json(orders);
};

// @desc    Delete an order
// @route   DELETE /api/orders/:id
// @access  Private/Admin
const deleteOrder = async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
        await Order.deleteOne({ _id: order._id });
        res.json({ message: 'Order removed' });
    } else {
        res.status(404);
        throw new Error('Order not found');
    }
};

// @desc    Cancel an order
// @route   PUT /api/orders/:id/cancel
// @access  Private
const cancelOrder = async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
        if (req.user.role === 'admin' || order.user.toString() === req.user._id.toString()) {
            if (order.status === 'Cancelled') {
                res.status(400);
                throw new Error('Order is already cancelled');
            }
            if (order.status === 'Delivered') {
                res.status(400);
                throw new Error('Cannot cancel a delivered order');
            }

            order.status = 'Cancelled';
            const updatedOrder = await order.save();

            // Restore the stock
            for (const item of order.items) {
                const product = await Product.findById(item.product);
                if (product) {
                    product.stock += item.quantity;
                    await product.save();
                }
            }

            res.json(updatedOrder);
        } else {
            res.status(401);
            throw new Error('Not authorized to cancel this order');
        }
    } else {
        res.status(404);
        throw new Error('Order not found');
    }
};

module.exports = {
    addOrderItems,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getMyOrders,
    getOrders,
    deleteOrder,
    cancelOrder,
    createRazorpayOrder,
};
