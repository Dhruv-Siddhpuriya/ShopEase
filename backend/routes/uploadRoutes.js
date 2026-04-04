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

    const urls = req.files.map(file => `/uploads/${file.filename}`);
    res.json({ urls });
});

module.exports = router;
