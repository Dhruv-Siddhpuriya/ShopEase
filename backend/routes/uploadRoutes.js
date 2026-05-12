const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const { protect, admin } = require('../middleware/authMiddleware');

// @desc    Upload multiple product images
// @route   POST /api/upload
// @access  Private/Admin
router.post('/', protect, admin, upload.array('images', 10), (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: 'No files uploaded' });
    }

    try {
        const urls = req.files.map(file => {
            const base64String = file.buffer.toString('base64');
            return `data:${file.mimetype};base64,${base64String}`;
        });

        res.json({ urls });
    } catch (error) {
        console.error('Base64 Conversion Error:', error);
        res.status(500).json({ message: 'Error converting images to Base64', error: error.message });
    }
});

module.exports = router;
