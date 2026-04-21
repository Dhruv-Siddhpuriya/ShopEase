const express = require('express');
const router = express.Router();
const { chatWithAI, getProductSuggestions } = require('../controllers/aiController');

router.post('/chat', chatWithAI);
router.get('/suggestions/:id', getProductSuggestions);

module.exports = router;
