const express = require('express');
const router = express.Router();
const {
    addOrderItems,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getMyOrders,
    getOrders,
    deleteOrder,
    cancelOrder,
    createRazorpayOrder,
} = require('../controllers/orderController');
const { protect, admin } = require('../middleware/authMiddleware');

const asyncHandler = (fn) => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

router.route('/').post(protect, asyncHandler(addOrderItems)).get(protect, admin, asyncHandler(getOrders));
router.route('/razorpay').post(protect, asyncHandler(createRazorpayOrder));
router.route('/myorders').get(protect, asyncHandler(getMyOrders));
router.route('/:id').get(protect, asyncHandler(getOrderById)).delete(protect, admin, asyncHandler(deleteOrder));
router.route('/:id/pay').put(protect, asyncHandler(updateOrderToPaid));
router.route('/:id/deliver').put(protect, admin, asyncHandler(updateOrderToDelivered));
router.route('/:id/cancel').put(protect, asyncHandler(cancelOrder));

module.exports = router;
