const Cart = require('../models/Cart');

// @desc    Get user cart
// @route   GET /api/cart
// @access  Private
const getCart = async (req, res) => {
    let cart = await Cart.findOne({ user: req.user._id }).populate('items.product');

    if (!cart) {
        cart = await Cart.create({ user: req.user._id, items: [] });
    }

    res.json(cart);
};

// @desc    Add item to cart
// @route   POST /api/cart
// @access  Private
const addToCart = async (req, res) => {
    const { productId, quantity } = req.body;

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
        cart = new Cart({ user: req.user._id, items: [] });
    }

    const itemIndex = cart.items.findIndex(
        (item) => item.product.toString() === productId
    );

    if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
    } else {
        cart.items.push({ product: productId, quantity });
    }

    await cart.save();
    
    // return populated cart
    cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
    res.json(cart);
};

// @desc    Update cart item quantity
// @route   PUT /api/cart/:itemId
// @access  Private
const updateCartItem = async (req, res) => {
    const { quantity } = req.body;
    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
        res.status(404);
        throw new Error('Cart not found');
    }

    const itemIndex = cart.items.findIndex(
        (item) => item._id.toString() === req.params.itemId
    );

    if (itemIndex > -1) {
        cart.items[itemIndex].quantity = quantity;
        await cart.save();
        cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
        res.json(cart);
    } else {
        res.status(404);
        throw new Error('Item not found in cart');
    }
};

// @desc    Remove item from cart
// @route   DELETE /api/cart/:itemId
// @access  Private
const removeCartItem = async (req, res) => {
    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
        res.status(404);
        throw new Error('Cart not found');
    }

    cart.items = cart.items.filter(
        (item) => item._id.toString() !== req.params.itemId
    );

    await cart.save();
    cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
    res.json(cart);
};

// @desc    Clear cart
// @route   DELETE /api/cart
// @access  Private
const clearCart = async (req, res) => {
    let cart = await Cart.findOne({ user: req.user._id });
    if (cart) {
        cart.items = [];
        await cart.save();
    }
    res.json({ message: 'Cart cleared' });
}


module.exports = {
    getCart,
    addToCart,
    updateCartItem,
    removeCartItem,
    clearCart
};
