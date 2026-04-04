const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        title: {
            type: String,
            required: [true, 'Please add a product title'],
            trim: true,
        },
        price: {
            type: Number,
            required: [true, 'Please add a product price'],
            default: 0.0,
        },
        description: {
            type: String,
            required: [true, 'Please add a description'],
        },
        image: {
            type: String,
            default: '',
        },
        // Multiple images support
        images: {
            type: [String],
            default: [],
        },
        category: {
            type: String,
            required: [true, 'Please add a category'],
        },
        stock: {
            type: Number,
            required: [true, 'Please add stock quantity'],
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Product', productSchema);
