const fs = require('fs');
const path = require('path');

const categories = ['Electronics', 'Fashion', 'Shoes', 'Accessories'];

// Mapping nouns to specific realistic Unsplash image URLs
const productsConfig = {
  Electronics: [
    { noun: 'Headphones', images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80', 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80', 'https://images.unsplash.com/photo-1562408590-e32931084e23?w=500&q=80'] },
    { noun: 'Smartphone', images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80', 'https://images.unsplash.com/photo-1598327105666-5b89351cb31b?w=500&q=80'] },
    { noun: 'Laptop', images: ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80', 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80'] },
    { noun: 'Monitor', images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80'] },
    { noun: 'Camera', images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80', 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80'] },
    { noun: 'Speaker', images: ['https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=80'] }
  ],
  Fashion: [
    { noun: 'T-Shirt', images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80', 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80'] },
    { noun: 'Jacket', images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80'] },
    { noun: 'Jeans', images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80'] },
    { noun: 'Sweater', images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80'] },
    { noun: 'Dress', images: ['https://images.unsplash.com/photo-1515347619362-e6749e75550a?w=500&q=80'] },
    { noun: 'Shirt', images: ['https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=500&q=80'] }
  ],
  Shoes: [
    { noun: 'Sneakers', images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80', 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80', 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&q=80'] },
    { noun: 'Boots', images: ['https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&q=80'] },
    { noun: 'Loafers', images: ['https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80'] },
    { noun: 'Sandals', images: ['https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500&q=80'] },
    { noun: 'Running Shoes', images: ['https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80'] }
  ],
  Accessories: [
    { noun: 'Watch', images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80', 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&q=80'] },
    { noun: 'Sunglasses', images: ['https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80'] },
    { noun: 'Belt', images: ['https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80'] },
    { noun: 'Wallet', images: ['https://images.unsplash.com/photo-1624419996924-d2c6c06a8f15?w=500&q=80'] },
    { noun: 'Backpack', images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80'] }
  ]
};

const adjectives = ['Wireless', 'Smart', 'Premium', 'Classic', 'Ultra-Slim', 'Pro', 'Casual', 'Vintage', 'Luxury', 'Designer'];

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

function generateProducts(countPerCategory = 55) {
  let products = [];
  
  for (const category of categories) {
    const nounConfig = productsConfig[category];
    for (let i = 0; i < countPerCategory; i++) {
        const item = getRandom(nounConfig);
        const adjective = getRandom(adjectives);
        const image = getRandom(item.images);
        const randId = Math.floor(Math.random() * 1000);
        
        // Flipkart style description points
        const description = JSON.stringify([
            `High-quality ${item.noun.toLowerCase()} crafted for maximum durability and style.`,
            `Engineered with advanced precision for an unmatched premium feeling.`,
            `1-Year Manufacturer Warranty included.`,
            `Easy 7-Day Return Policy.`
        ]);

        // Price in Rupees
        let minPrice = 500;
        let maxPrice = 5000;
        if (category === 'Electronics') {
            minPrice = 5000;
            maxPrice = 150000;
        } else if (category === 'Shoes') {
            minPrice = 1000;
            maxPrice = 8000;
        }

        products.push({
            title: `${adjective} ${item.noun} ${randId}`,
            image: image,
            description: description, // store as stringified array
            category: category,
            price: Number((Math.random() * (maxPrice - minPrice) + minPrice).toFixed(0)), // Round number for Rupees
            stock: Math.floor(Math.random() * 100) + 5,
        });
    }
  }
  return products;
}

const products = generateProducts(55); // 220 items in total

const fileContent = "const products = " + JSON.stringify(products, null, 4) + ";\n\nmodule.exports = products;\n";
const outPath = path.join(__dirname, '../data/products.js');
fs.writeFileSync(outPath, fileContent, 'utf-8');

console.log('Successfully generated', products.length, 'products into backend/data/products.js!');
