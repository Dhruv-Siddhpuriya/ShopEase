const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const User = require('./models/User');
const Product = require('./models/Product');

dotenv.config();
connectDB();

const images = {
    ultrabook: '/images/laptops/laptop_ultrabook_1775368145724.png',
    gaming: '/images/laptops/laptop_gaming_1775368164170.png',
    convertible: '/images/laptops/laptop_convertible_1775368179130.png'
};

const getDesc = (cpu, ram, storage, display, gpu) => {
    return JSON.stringify([
        `Processor: ${cpu}`,
        `RAM: ${ram}`,
        `Storage: ${storage} SSD`,
        `Display: ${display}`,
        `Graphics: ${gpu}`,
        'Premium build quality with slim design',
        '1 Year Manufacturer Warranty'
    ]);
};

const laptops = [
    {
        name: 'Apple MacBook Pro 16" M3 Max',
        price: 319900,
        brand: 'Apple',
        category: 'Laptops',
        countInStock: 15,
        image: images.ultrabook,
        images: [images.ultrabook, images.convertible],
        description: getDesc('Apple M3 Max 14-core', '36GB Unified Memory', '1TB', '16.2-inch Liquid Retina XDR', '30-core GPU')
    },
    {
        name: 'Apple MacBook Air 15" M3',
        price: 134900,
        brand: 'Apple',
        category: 'Laptops',
        countInStock: 25,
        image: images.ultrabook,
        images: [images.ultrabook],
        description: getDesc('Apple M3 8-core', '16GB Unified Memory', '512GB', '15.3-inch Liquid Retina', '10-core GPU')
    },
    {
        name: 'Dell XPS 15 9530',
        price: 185000,
        brand: 'Dell',
        category: 'Laptops',
        countInStock: 10,
        image: images.ultrabook,
        images: [images.ultrabook, images.gaming],
        description: getDesc('Intel Core i9-13900H', '32GB DDR5', '1TB', '15.6" 3.5K OLED Touch', 'NVIDIA GeForce RTX 4070')
    },
    {
        name: 'Dell Alienware m18',
        price: 299000,
        brand: 'Dell',
        category: 'Laptops',
        countInStock: 5,
        image: images.gaming,
        images: [images.gaming, images.ultrabook],
        description: getDesc('Intel Core i9-14900HX', '64GB DDR5', '2TB', '18.0" QHD+ 165Hz', 'NVIDIA GeForce RTX 4090 16GB')
    },
    {
        name: 'HP Spectre x360 14',
        price: 154999,
        brand: 'HP',
        category: 'Laptops',
        countInStock: 12,
        image: images.convertible,
        images: [images.convertible, images.ultrabook],
        description: getDesc('Intel Core Ultra 7 155H', '16GB LPDDR5x', '1TB', '14" 2.8K OLED Touch', 'Intel Arc Graphics')
    },
    {
        name: 'HP OMEN 16 Gaming Laptop',
        price: 129000,
        brand: 'HP',
        category: 'Laptops',
        countInStock: 18,
        image: images.gaming,
        images: [images.gaming],
        description: getDesc('AMD Ryzen 7 7840HS', '16GB DDR5', '1TB', '16.1" FHD 165Hz', 'NVIDIA GeForce RTX 4060 8GB')
    },
    {
        name: 'Lenovo ThinkPad X1 Carbon Gen 11',
        price: 165000,
        brand: 'Lenovo',
        category: 'Laptops',
        countInStock: 8,
        image: images.ultrabook,
        images: [images.ultrabook],
        description: getDesc('Intel Core i7-1355U', '32GB LPDDR5', '1TB', '14" WUXGA IPS', 'Intel Iris Xe Graphics')
    },
    {
        name: 'Lenovo Legion Pro 7i',
        price: 224000,
        brand: 'Lenovo',
        category: 'Laptops',
        countInStock: 7,
        image: images.gaming,
        images: [images.gaming, images.ultrabook],
        description: getDesc('Intel Core i9-13900HX', '32GB DDR5', '1TB', '16" WQXGA 240Hz', 'NVIDIA GeForce RTX 4080 12GB')
    },
    {
        name: 'ASUS ROG Zephyrus G14',
        price: 145000,
        brand: 'ASUS',
        category: 'Laptops',
        countInStock: 14,
        image: images.gaming,
        images: [images.gaming, images.ultrabook],
        description: getDesc('AMD Ryzen 9 7940HS', '16GB DDR5', '1TB', '14" QHD+ Nebula 165Hz', 'NVIDIA GeForce RTX 4060')
    },
    {
        name: 'ASUS Zenbook 14X OLED',
        price: 112000,
        brand: 'ASUS',
        category: 'Laptops',
        countInStock: 20,
        image: images.ultrabook,
        images: [images.ultrabook, images.convertible],
        description: getDesc('Intel Core i7-13700H', '16GB LPDDR5', '1TB', '14.5" 2.8K OLED Touch', 'Intel Iris Xe')
    },
    {
        name: 'Acer Predator Helios Neo 16',
        price: 119000,
        brand: 'Acer',
        category: 'Laptops',
        countInStock: 22,
        image: images.gaming,
        images: [images.gaming],
        description: getDesc('Intel Core i7-13700HX', '16GB DDR5', '512GB', '16" WUXGA 165Hz', 'NVIDIA GeForce RTX 4050 6GB')
    },
    {
        name: 'Acer Swift 14 AI',
        price: 99000,
        brand: 'Acer',
        category: 'Laptops',
        countInStock: 30,
        image: images.ultrabook,
        images: [images.ultrabook],
        description: getDesc('Intel Core Ultra 5 125H', '16GB LPDDR5X', '512GB', '14" FHD+ IPS', 'Intel Arc Graphics')
    },
    {
        name: 'MSI Stealth 16 Studio',
        price: 175000,
        brand: 'MSI',
        category: 'Laptops',
        countInStock: 6,
        image: images.ultrabook,
        images: [images.ultrabook, images.gaming],
        description: getDesc('Intel Core i9-13900H', '32GB DDR5', '1TB', '16" QHD+ 240Hz', 'NVIDIA GeForce RTX 4070 8GB')
    },
    {
        name: 'MSI Raider GE78 HX',
        price: 285000,
        brand: 'MSI',
        category: 'Laptops',
        countInStock: 3,
        image: images.gaming,
        images: [images.gaming],
        description: getDesc('Intel Core i9-14900HX', '64GB DDR5', '2TB', '17.3" QHD+ 240Hz', 'NVIDIA GeForce RTX 4080 12GB')
    },
    {
        name: 'Razer Blade 16',
        price: 320000,
        brand: 'Razer',
        category: 'Laptops',
        countInStock: 4,
        image: images.gaming,
        images: [images.gaming, images.ultrabook],
        description: getDesc('Intel Core i9-13950HX', '32GB DDR5', '1TB', '16" Dual UHD+ 120Hz/FHD+ 240Hz', 'NVIDIA GeForce RTX 4090')
    },
    {
        name: 'Razer Blade 14',
        price: 199000,
        brand: 'Razer',
        category: 'Laptops',
        countInStock: 9,
        image: images.gaming,
        images: [images.gaming],
        description: getDesc('AMD Ryzen 9 7940HS', '16GB DDR5', '1TB', '14" QHD+ 240Hz', 'NVIDIA GeForce RTX 4070')
    },
    {
        name: 'Microsoft Surface Laptop Studio 2',
        price: 215000,
        brand: 'Microsoft',
        category: 'Laptops',
        countInStock: 11,
        image: images.convertible,
        images: [images.convertible, images.ultrabook],
        description: getDesc('Intel Core i7-13700H', '32GB LPDDR5x', '1TB', '14.4" PixelSense Flow Touch', 'NVIDIA GeForce RTX 4060')
    },
    {
        name: 'Samsung Galaxy Book3 Pro',
        price: 135000,
        brand: 'Samsung',
        category: 'Laptops',
        countInStock: 15,
        image: images.ultrabook,
        images: [images.ultrabook],
        description: getDesc('Intel Core i7-1360P', '16GB LPDDR5', '1TB', '16" 3K AMOLED 120Hz', 'Intel Iris Xe Graphics')
    },
    {
        name: 'LG Gram 17',
        price: 142000,
        brand: 'LG',
        category: 'Laptops',
        countInStock: 13,
        image: images.ultrabook,
        images: [images.ultrabook],
        description: getDesc('Intel Core i7-1360P', '16GB LPDDR5', '1TB', '17" WQXGA IPS', 'NVIDIA GeForce RTX 3050 4GB')
    },
    {
        name: 'Gigabyte AORUS 15',
        price: 125000,
        brand: 'Gigabyte',
        category: 'Laptops',
        countInStock: 17,
        image: images.gaming,
        images: [images.gaming],
        description: getDesc('Intel Core i7-13700H', '16GB DDR5', '1TB', '15.6" QHD 165Hz', 'NVIDIA GeForce RTX 4060 8GB')
    }
];

const seedLaptops = async () => {
    try {
        const adminUser = await User.findOne({ role: 'admin' }) || await User.findOne({});
        if (!adminUser) {
            console.error('No user found to act as admin');
            process.exit(1);
        }

        const sampleLaptops = laptops.map(laptop => ({
            ...laptop,
            title: laptop.name,
            stock: laptop.countInStock,
            user: adminUser._id,
        }));

        await Product.insertMany(sampleLaptops);
        console.log('20 Laptops added successfully!');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

seedLaptops();
