const Product = require('../models/Product');

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
    const pageSize = 12;
    const page = Number(req.query.pageNumber) || 1;

    const keyword = req.query.keyword
        ? {
              title: {
                  $regex: req.query.keyword,
                  $options: 'i',
              },
          }
        : {};

    const category = req.query.category ? { category: req.query.category } : {};

    const count = await Product.countDocuments({ ...keyword, ...category });
    const products = await Product.find({ ...keyword, ...category })
        .limit(pageSize)
        .skip(pageSize * (page - 1));

    res.json({ products, page, pages: Math.ceil(count / pageSize), total: count });
};

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        await Product.deleteOne({ _id: product._id });
        res.json({ message: 'Product removed' });
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
};

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = async (req, res) => {
    const { title, price, description, image, images, category, stock } = req.body;
    const imageList = images && images.length > 0 ? images : (image ? [image] : []);
    const product = new Product({
        title: title || 'New Product',
        price: price || 0,
        user: req.user._id,
        image: imageList[0] || 'https://placehold.co/300x300?text=Product',
        images: imageList,
        category: category || 'General',
        stock: stock !== undefined ? stock : 0,
        description: description || 'Product description',
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
};

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = async (req, res) => {
    const { title, price, description, image, images, category, stock } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
        product.title = title || product.title;
        product.price = price || product.price;
        product.description = description || product.description;
        product.category = category || product.category;
        product.stock = stock !== undefined ? stock : product.stock;

        if (images && images.length > 0) {
            product.images = images;
            product.image = images[0];
        } else if (image) {
            product.image = image;
            product.images = [image];
        }

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
};

module.exports = {
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct,
};
