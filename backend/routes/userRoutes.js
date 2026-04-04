const express = require('express');
const router = express.Router();
const {
    authUser,
    registerUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
} = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

// Using an async error wrapper is generally good practice but we mapped express-async-handler concept into our controllers by using try/catch if needed, but since we didn't add the middleware, we should use a wrapper or try catch.
// Oh wait, I didn't install `express-async-handler`. I'll create a simple wrapper or just add it to the file.
// Let me write a quick wrapper to handle async errors in express neatly.

const asyncHandler = (fn) => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

router.route('/').post(asyncHandler(registerUser)).get(protect, admin, asyncHandler(getUsers));
router.post('/login', asyncHandler(authUser));
router.route('/profile').get(protect, asyncHandler(getUserProfile)).put(protect, asyncHandler(updateUserProfile));

module.exports = router;
