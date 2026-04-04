const express = require('express');
const router = express.Router();
const {
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct,
} = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware');

const asyncHandler = (fn) => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

router.route('/').get(asyncHandler(getProducts)).post(protect, admin, asyncHandler(createProduct));
router
    .route('/:id')
    .get(asyncHandler(getProductById))
    .delete(protect, admin, asyncHandler(deleteProduct))
    .put(protect, admin, asyncHandler(updateProduct));

module.exports = router;
