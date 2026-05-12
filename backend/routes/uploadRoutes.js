const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const { protect, admin } = require('../middleware/authMiddleware');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// @desc    Upload multiple product images
// @route   POST /api/upload
// @access  Private/Admin
router.post('/', protect, admin, upload.array('images', 10), async (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: 'No files uploaded' });
    }

    try {
        const uploadPromises = req.files.map(async (file) => {
            // Upload to cloudinary
            const result = await cloudinary.uploader.upload(file.path, {
                folder: 'shopease_products',
                use_filename: true,
                unique_filename: false,
            });
            // Delete local file after upload
            fs.unlinkSync(file.path);
            return result.secure_url;
        });

        const urls = await Promise.all(uploadPromises);
        res.json({ urls });
    } catch (error) {
        console.error('Cloudinary Upload Error:', error);
        
        // Ensure local files are deleted even if upload fails
        req.files.forEach(file => {
            if (fs.existsSync(file.path)) {
                fs.unlinkSync(file.path);
            }
        });

        res.status(500).json({ message: 'Error uploading to cloud storage', error: error.message });
    }
});

module.exports = router;
