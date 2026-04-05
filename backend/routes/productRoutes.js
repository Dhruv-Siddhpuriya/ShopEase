const express = require('express');
const router = express.Router();
const {
    getProducts,
    getProductById,
    deleteProduct,
    deleteMultipleProducts,
    createProduct,
    updateProduct,
    createProductReview,
} = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware');

const asyncHandler = (fn) => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

router.route('/').get(asyncHandler(getProducts)).post(protect, admin, asyncHandler(createProduct));
router.post('/bulk-delete', protect, admin, asyncHandler(deleteMultipleProducts));
router.route('/:id/reviews').post(protect, asyncHandler(createProductReview));
router
    .route('/:id')
    .get(asyncHandler(getProductById))
    .delete(protect, admin, asyncHandler(deleteProduct))
    .put(protect, admin, asyncHandler(updateProduct));

module.exports = router;
