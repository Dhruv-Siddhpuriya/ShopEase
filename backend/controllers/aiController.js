const { GoogleGenAI } = require('@google/genai');
const Product = require('../models/Product');

// @desc    Chat with AI Assistant
// @route   POST /api/ai/chat
// @access  Public
const chatWithAI = async (req, res) => {
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const { messages } = req.body; // Expects an array: [ { role: 'user', parts: [{text: '...'} ] } ]
        
        // Fetch ALL products to give AI full context (Gemini 2.5 Flash has a 1M+ token window, so a catalog of hundreds of items fits effortlessly)
        const products = await Product.find({}).select('title price category stock');
        
        const catalogContext = products.map(p => 
            `- Title: ${p.title} | Price: $${p.price} | Category: ${p.category} | Link: /product/${p._id} | Status: ${p.stock > 0 ? 'In Stock' : 'Out of Stock'}`
        ).join('\n');

        const systemInstruction = `You are a strict but friendly AI shopping assistant exclusively for 'ShopEase'.
CRITICAL RULES:
1. ONLY recommend products from the provided "Current Product Catalog" below. 
2. NEVER mention, invent, or recommend products that are not in the list below.
3. If a user asks for a product we don't have, politely inform them that ShopEase doesn't carry it.
4. When you recommend a product, ALWAYS provide a Markdown link to it using the exact "Link" URL provided. Example: [Laptop Name](/product/12345).
5. Be concise, polite, and enthusiastic. Use emojis sparingly.

Current Product Catalog:
${catalogContext}`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: messages,
            config: {
                systemInstruction: systemInstruction,
                temperature: 0.7,
            }
        });

        res.json({ reply: response.text });
    } catch (error) {
        console.error('AI Error (Chat):', error);
        res.status(500).json({ message: 'The AI assistant requires a valid GEMINI_API_KEY to be set in backend/.env' });
    }
};

// @desc    Get AI Suggestions for a product
// @route   GET /api/ai/suggestions/:id
// @access  Public
const getProductSuggestions = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const prompt = `You are an expert sales associate at ShopEase. Provide exactly 3 short, punchy reasons why a customer should buy the "${product.title}" (${product.category}) which costs $${product.price}. Base this on its description: "${product.description}". 
Format the output as a pure JSON array of strings. Do not include markdown code block syntax (like \`\`\`json). Just return the raw array. Example: ["Great battery", "Amazing display", "Thin and light"].`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                temperature: 0.5,
            }
        });

        let text = response.text.trim();
        // Fallback cleanup
        if (text.startsWith('```json')) text = text.replace(/```json/g, '').replace(/```/g, '').trim();
        if (text.startsWith('```')) text = text.replace(/```/g, '').trim();
        
        let suggestions = [];
        try {
            suggestions = JSON.parse(text);
        } catch(e) {
            // fallback
            suggestions = ["High quality product", "Great value for money", "Highly recommended by experts"];
        }

        res.json({ suggestions });
    } catch (error) {
         console.error('AI Error (Suggestions):', error);
         res.status(500).json({ message: 'Failed to load AI Insights.' });
    }
};

module.exports = {
    chatWithAI,
    getProductSuggestions
};
