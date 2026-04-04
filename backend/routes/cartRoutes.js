const express = require('express');
const router = express.Router();
const {
    getCart,
    addToCart,
    updateCartItem,
    removeCartItem,
    clearCart
} = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');

const asyncHandler = (fn) => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

router.route('/').get(protect, asyncHandler(getCart)).post(protect, asyncHandler(addToCart)).delete(protect, asyncHandler(clearCart));
router.route('/:itemId').put(protect, asyncHandler(updateCartItem)).delete(protect, asyncHandler(removeCartItem));

module.exports = router;
