const products = [
    {
        "title": "Pro Smartphone 15",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80",
        "description": "[\"High-quality smartphone crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 57340,
        "stock": 36
    },
    {
        "title": "Casual Speaker 560",
        "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=80",
        "description": "[\"High-quality speaker crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 87933,
        "stock": 20
    },
    {
        "title": "Wireless Speaker 148",
        "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=80",
        "description": "[\"High-quality speaker crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 59126,
        "stock": 48
    },
    {
        "title": "Vintage Laptop 346",
        "image": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80",
        "description": "[\"High-quality laptop crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 128828,
        "stock": 23
    },
    {
        "title": "Luxury Smartphone 343",
        "image": "https://images.unsplash.com/photo-1598327105666-5b89351cb31b?w=500&q=80",
        "description": "[\"High-quality smartphone crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 125898,
        "stock": 32
    },
    {
        "title": "Ultra-Slim Smartphone 868",
        "image": "https://images.unsplash.com/photo-1598327105666-5b89351cb31b?w=500&q=80",
        "description": "[\"High-quality smartphone crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 17177,
        "stock": 27
    },
    {
        "title": "Wireless Smartphone 266",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80",
        "description": "[\"High-quality smartphone crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 110103,
        "stock": 72
    },
    {
        "title": "Premium Headphones 993",
        "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80",
        "description": "[\"High-quality headphones crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 49677,
        "stock": 80
    },
    {
        "title": "Classic Smartphone 935",
        "image": "https://images.unsplash.com/photo-1598327105666-5b89351cb31b?w=500&q=80",
        "description": "[\"High-quality smartphone crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 46748,
        "stock": 86
    },
    {
        "title": "Casual Monitor 482",
        "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
        "description": "[\"High-quality monitor crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 105982,
        "stock": 63
    },
    {
        "title": "Classic Camera 913",
        "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
        "description": "[\"High-quality camera crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 33696,
        "stock": 28
    },
    {
        "title": "Luxury Laptop 143",
        "image": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80",
        "description": "[\"High-quality laptop crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 27242,
        "stock": 78
    },
    {
        "title": "Designer Headphones 772",
        "image": "https://images.unsplash.com/photo-1562408590-e32931084e23?w=500&q=80",
        "description": "[\"High-quality headphones crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 36358,
        "stock": 43
    },
    {
        "title": "Designer Headphones 334",
        "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80",
        "description": "[\"High-quality headphones crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 23780,
        "stock": 73
    },
    {
        "title": "Vintage Headphones 385",
        "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
        "description": "[\"High-quality headphones crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 29859,
        "stock": 79
    },
    {
        "title": "Classic Laptop 9",
        "image": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80",
        "description": "[\"High-quality laptop crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 103335,
        "stock": 7
    },
    {
        "title": "Pro Headphones 70",
        "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80",
        "description": "[\"High-quality headphones crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 56386,
        "stock": 18
    },
    {
        "title": "Premium Speaker 909",
        "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=80",
        "description": "[\"High-quality speaker crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 88205,
        "stock": 67
    },
    {
        "title": "Premium Monitor 591",
        "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
        "description": "[\"High-quality monitor crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 146882,
        "stock": 87
    },
    {
        "title": "Wireless Monitor 749",
        "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
        "description": "[\"High-quality monitor crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 64140,
        "stock": 39
    },
    {
        "title": "Pro Headphones 342",
        "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80",
        "description": "[\"High-quality headphones crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 21918,
        "stock": 71
    },
    {
        "title": "Smart Laptop 569",
        "image": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80",
        "description": "[\"High-quality laptop crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 70001,
        "stock": 86
    },
    {
        "title": "Premium Camera 178",
        "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
        "description": "[\"High-quality camera crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 83962,
        "stock": 43
    },
    {
        "title": "Pro Smartphone 958",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80",
        "description": "[\"High-quality smartphone crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 74472,
        "stock": 69
    },
    {
        "title": "Smart Headphones 153",
        "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80",
        "description": "[\"High-quality headphones crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 98129,
        "stock": 87
    },
    {
        "title": "Wireless Camera 265",
        "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
        "description": "[\"High-quality camera crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 101267,
        "stock": 16
    },
    {
        "title": "Premium Smartphone 700",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80",
        "description": "[\"High-quality smartphone crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 38536,
        "stock": 74
    },
    {
        "title": "Pro Speaker 631",
        "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=80",
        "description": "[\"High-quality speaker crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 58631,
        "stock": 37
    },
    {
        "title": "Designer Smartphone 691",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80",
        "description": "[\"High-quality smartphone crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 112363,
        "stock": 17
    },
    {
        "title": "Ultra-Slim Laptop 215",
        "image": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80",
        "description": "[\"High-quality laptop crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 95599,
        "stock": 31
    },
    {
        "title": "Smart Monitor 207",
        "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
        "description": "[\"High-quality monitor crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 67530,
        "stock": 62
    },
    {
        "title": "Designer Smartphone 673",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80",
        "description": "[\"High-quality smartphone crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 8007,
        "stock": 83
    },
    {
        "title": "Smart Smartphone 638",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80",
        "description": "[\"High-quality smartphone crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 103429,
        "stock": 71
    },
    {
        "title": "Premium Laptop 984",
        "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
        "description": "[\"High-quality laptop crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 47803,
        "stock": 38
    },
    {
        "title": "Casual Speaker 96",
        "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=80",
        "description": "[\"High-quality speaker crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 132988,
        "stock": 95
    },
    {
        "title": "Designer Laptop 214",
        "image": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80",
        "description": "[\"High-quality laptop crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 76416,
        "stock": 91
    },
    {
        "title": "Premium Monitor 816",
        "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
        "description": "[\"High-quality monitor crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 10921,
        "stock": 47
    },
    {
        "title": "Vintage Monitor 76",
        "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
        "description": "[\"High-quality monitor crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 14337,
        "stock": 87
    },
    {
        "title": "Wireless Smartphone 28",
        "image": "https://images.unsplash.com/photo-1598327105666-5b89351cb31b?w=500&q=80",
        "description": "[\"High-quality smartphone crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 42073,
        "stock": 98
    },
    {
        "title": "Ultra-Slim Camera 893",
        "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
        "description": "[\"High-quality camera crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 142606,
        "stock": 83
    },
    {
        "title": "Smart Laptop 840",
        "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
        "description": "[\"High-quality laptop crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 67087,
        "stock": 75
    },
    {
        "title": "Smart Smartphone 298",
        "image": "https://images.unsplash.com/photo-1598327105666-5b89351cb31b?w=500&q=80",
        "description": "[\"High-quality smartphone crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 53818,
        "stock": 72
    },
    {
        "title": "Pro Laptop 467",
        "image": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80",
        "description": "[\"High-quality laptop crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 146721,
        "stock": 80
    },
    {
        "title": "Ultra-Slim Smartphone 142",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80",
        "description": "[\"High-quality smartphone crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 138950,
        "stock": 63
    },
    {
        "title": "Vintage Camera 60",
        "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
        "description": "[\"High-quality camera crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 122253,
        "stock": 93
    },
    {
        "title": "Vintage Headphones 707",
        "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
        "description": "[\"High-quality headphones crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 71655,
        "stock": 29
    },
    {
        "title": "Pro Camera 265",
        "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
        "description": "[\"High-quality camera crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 130240,
        "stock": 45
    },
    {
        "title": "Classic Laptop 855",
        "image": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80",
        "description": "[\"High-quality laptop crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 7620,
        "stock": 45
    },
    {
        "title": "Smart Camera 238",
        "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
        "description": "[\"High-quality camera crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 127995,
        "stock": 102
    },
    {
        "title": "Premium Laptop 86",
        "image": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80",
        "description": "[\"High-quality laptop crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 12818,
        "stock": 100
    },
    {
        "title": "Pro Monitor 778",
        "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
        "description": "[\"High-quality monitor crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 112526,
        "stock": 62
    },
    {
        "title": "Classic Camera 961",
        "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
        "description": "[\"High-quality camera crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 123546,
        "stock": 54
    },
    {
        "title": "Ultra-Slim Laptop 597",
        "image": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80",
        "description": "[\"High-quality laptop crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 77186,
        "stock": 53
    },
    {
        "title": "Ultra-Slim Speaker 959",
        "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=80",
        "description": "[\"High-quality speaker crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 21292,
        "stock": 104
    },
    {
        "title": "Luxury Monitor 811",
        "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
        "description": "[\"High-quality monitor crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Electronics",
        "price": 32670,
        "stock": 50
    },
    {
        "title": "Pro Sweater 168",
        "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80",
        "description": "[\"High-quality sweater crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 879,
        "stock": 30
    },
    {
        "title": "Casual Jacket 777",
        "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80",
        "description": "[\"High-quality jacket crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 2848,
        "stock": 7
    },
    {
        "title": "Luxury Jacket 971",
        "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80",
        "description": "[\"High-quality jacket crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 3242,
        "stock": 97
    },
    {
        "title": "Pro Sweater 377",
        "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80",
        "description": "[\"High-quality sweater crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 632,
        "stock": 22
    },
    {
        "title": "Designer T-Shirt 153",
        "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
        "description": "[\"High-quality t-shirt crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 4871,
        "stock": 66
    },
    {
        "title": "Casual Sweater 718",
        "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80",
        "description": "[\"High-quality sweater crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 2559,
        "stock": 75
    },
    {
        "title": "Ultra-Slim Shirt 666",
        "image": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=500&q=80",
        "description": "[\"High-quality shirt crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 1873,
        "stock": 45
    },
    {
        "title": "Designer Sweater 139",
        "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80",
        "description": "[\"High-quality sweater crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 4612,
        "stock": 25
    },
    {
        "title": "Casual Jeans 338",
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80",
        "description": "[\"High-quality jeans crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 4124,
        "stock": 54
    },
    {
        "title": "Smart Shirt 714",
        "image": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=500&q=80",
        "description": "[\"High-quality shirt crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 2221,
        "stock": 55
    },
    {
        "title": "Classic Jacket 372",
        "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80",
        "description": "[\"High-quality jacket crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 2478,
        "stock": 87
    },
    {
        "title": "Vintage Jacket 516",
        "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80",
        "description": "[\"High-quality jacket crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 1053,
        "stock": 34
    },
    {
        "title": "Vintage Jeans 944",
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80",
        "description": "[\"High-quality jeans crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 4177,
        "stock": 103
    },
    {
        "title": "Luxury Shirt 510",
        "image": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=500&q=80",
        "description": "[\"High-quality shirt crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 4510,
        "stock": 36
    },
    {
        "title": "Designer Sweater 635",
        "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80",
        "description": "[\"High-quality sweater crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 1570,
        "stock": 57
    },
    {
        "title": "Luxury Jeans 45",
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80",
        "description": "[\"High-quality jeans crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 539,
        "stock": 21
    },
    {
        "title": "Casual Sweater 791",
        "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80",
        "description": "[\"High-quality sweater crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 4143,
        "stock": 64
    },
    {
        "title": "Classic Sweater 309",
        "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80",
        "description": "[\"High-quality sweater crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 3334,
        "stock": 37
    },
    {
        "title": "Premium Jacket 809",
        "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80",
        "description": "[\"High-quality jacket crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 1462,
        "stock": 85
    },
    {
        "title": "Casual Jacket 247",
        "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80",
        "description": "[\"High-quality jacket crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 1095,
        "stock": 100
    },
    {
        "title": "Ultra-Slim T-Shirt 533",
        "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80",
        "description": "[\"High-quality t-shirt crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 2560,
        "stock": 56
    },
    {
        "title": "Premium Dress 750",
        "image": "https://images.unsplash.com/photo-1515347619362-e6749e75550a?w=500&q=80",
        "description": "[\"High-quality dress crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 632,
        "stock": 80
    },
    {
        "title": "Vintage Jeans 815",
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80",
        "description": "[\"High-quality jeans crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 2494,
        "stock": 47
    },
    {
        "title": "Wireless Dress 955",
        "image": "https://images.unsplash.com/photo-1515347619362-e6749e75550a?w=500&q=80",
        "description": "[\"High-quality dress crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 4138,
        "stock": 39
    },
    {
        "title": "Designer Sweater 897",
        "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80",
        "description": "[\"High-quality sweater crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 1419,
        "stock": 94
    },
    {
        "title": "Premium Shirt 322",
        "image": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=500&q=80",
        "description": "[\"High-quality shirt crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 603,
        "stock": 18
    },
    {
        "title": "Wireless Sweater 289",
        "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80",
        "description": "[\"High-quality sweater crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 2109,
        "stock": 49
    },
    {
        "title": "Wireless Dress 503",
        "image": "https://images.unsplash.com/photo-1515347619362-e6749e75550a?w=500&q=80",
        "description": "[\"High-quality dress crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 2120,
        "stock": 55
    },
    {
        "title": "Premium T-Shirt 988",
        "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80",
        "description": "[\"High-quality t-shirt crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 3734,
        "stock": 38
    },
    {
        "title": "Ultra-Slim Dress 515",
        "image": "https://images.unsplash.com/photo-1515347619362-e6749e75550a?w=500&q=80",
        "description": "[\"High-quality dress crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 4139,
        "stock": 21
    },
    {
        "title": "Smart Shirt 385",
        "image": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=500&q=80",
        "description": "[\"High-quality shirt crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 1316,
        "stock": 50
    },
    {
        "title": "Smart Sweater 438",
        "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80",
        "description": "[\"High-quality sweater crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 4498,
        "stock": 42
    },
    {
        "title": "Classic Jacket 441",
        "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80",
        "description": "[\"High-quality jacket crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 3473,
        "stock": 71
    },
    {
        "title": "Vintage Dress 222",
        "image": "https://images.unsplash.com/photo-1515347619362-e6749e75550a?w=500&q=80",
        "description": "[\"High-quality dress crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 3289,
        "stock": 65
    },
    {
        "title": "Casual Sweater 208",
        "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80",
        "description": "[\"High-quality sweater crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 1414,
        "stock": 72
    },
    {
        "title": "Vintage T-Shirt 374",
        "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80",
        "description": "[\"High-quality t-shirt crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 3399,
        "stock": 11
    },
    {
        "title": "Wireless Jacket 269",
        "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80",
        "description": "[\"High-quality jacket crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 2451,
        "stock": 35
    },
    {
        "title": "Classic Sweater 116",
        "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80",
        "description": "[\"High-quality sweater crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 2085,
        "stock": 37
    },
    {
        "title": "Ultra-Slim Jeans 539",
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80",
        "description": "[\"High-quality jeans crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 3085,
        "stock": 56
    },
    {
        "title": "Smart Jacket 908",
        "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80",
        "description": "[\"High-quality jacket crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 4003,
        "stock": 18
    },
    {
        "title": "Pro Dress 799",
        "image": "https://images.unsplash.com/photo-1515347619362-e6749e75550a?w=500&q=80",
        "description": "[\"High-quality dress crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 2606,
        "stock": 39
    },
    {
        "title": "Designer Jeans 91",
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80",
        "description": "[\"High-quality jeans crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 2818,
        "stock": 97
    },
    {
        "title": "Classic Jacket 409",
        "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80",
        "description": "[\"High-quality jacket crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 3684,
        "stock": 19
    },
    {
        "title": "Casual Sweater 926",
        "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80",
        "description": "[\"High-quality sweater crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 3890,
        "stock": 90
    },
    {
        "title": "Vintage Sweater 862",
        "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80",
        "description": "[\"High-quality sweater crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 2020,
        "stock": 87
    },
    {
        "title": "Casual T-Shirt 229",
        "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
        "description": "[\"High-quality t-shirt crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 1147,
        "stock": 41
    },
    {
        "title": "Pro Sweater 510",
        "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80",
        "description": "[\"High-quality sweater crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 1907,
        "stock": 58
    },
    {
        "title": "Vintage Dress 206",
        "image": "https://images.unsplash.com/photo-1515347619362-e6749e75550a?w=500&q=80",
        "description": "[\"High-quality dress crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 4791,
        "stock": 29
    },
    {
        "title": "Pro T-Shirt 81",
        "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
        "description": "[\"High-quality t-shirt crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 644,
        "stock": 36
    },
    {
        "title": "Designer Sweater 793",
        "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80",
        "description": "[\"High-quality sweater crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 1858,
        "stock": 68
    },
    {
        "title": "Ultra-Slim Dress 760",
        "image": "https://images.unsplash.com/photo-1515347619362-e6749e75550a?w=500&q=80",
        "description": "[\"High-quality dress crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 3296,
        "stock": 92
    },
    {
        "title": "Vintage T-Shirt 876",
        "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80",
        "description": "[\"High-quality t-shirt crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 4530,
        "stock": 56
    },
    {
        "title": "Vintage T-Shirt 885",
        "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
        "description": "[\"High-quality t-shirt crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 4917,
        "stock": 75
    },
    {
        "title": "Smart Jacket 215",
        "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80",
        "description": "[\"High-quality jacket crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 2547,
        "stock": 69
    },
    {
        "title": "Premium Sweater 306",
        "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80",
        "description": "[\"High-quality sweater crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Fashion",
        "price": 606,
        "stock": 49
    },
    {
        "title": "Smart Sandals 206",
        "image": "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500&q=80",
        "description": "[\"High-quality sandals crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 3216,
        "stock": 82
    },
    {
        "title": "Ultra-Slim Loafers 32",
        "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80",
        "description": "[\"High-quality loafers crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 1753,
        "stock": 13
    },
    {
        "title": "Luxury Loafers 563",
        "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80",
        "description": "[\"High-quality loafers crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 3377,
        "stock": 91
    },
    {
        "title": "Pro Boots 373",
        "image": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&q=80",
        "description": "[\"High-quality boots crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 2904,
        "stock": 10
    },
    {
        "title": "Luxury Loafers 229",
        "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80",
        "description": "[\"High-quality loafers crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 6142,
        "stock": 67
    },
    {
        "title": "Casual Boots 190",
        "image": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&q=80",
        "description": "[\"High-quality boots crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 1832,
        "stock": 34
    },
    {
        "title": "Luxury Loafers 341",
        "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80",
        "description": "[\"High-quality loafers crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 5810,
        "stock": 87
    },
    {
        "title": "Classic Running Shoes 421",
        "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80",
        "description": "[\"High-quality running shoes crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 3685,
        "stock": 38
    },
    {
        "title": "Classic Sandals 233",
        "image": "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500&q=80",
        "description": "[\"High-quality sandals crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 4299,
        "stock": 25
    },
    {
        "title": "Designer Running Shoes 462",
        "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80",
        "description": "[\"High-quality running shoes crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 2064,
        "stock": 19
    },
    {
        "title": "Luxury Running Shoes 414",
        "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80",
        "description": "[\"High-quality running shoes crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 6392,
        "stock": 86
    },
    {
        "title": "Classic Sandals 449",
        "image": "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500&q=80",
        "description": "[\"High-quality sandals crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 2151,
        "stock": 19
    },
    {
        "title": "Vintage Loafers 166",
        "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80",
        "description": "[\"High-quality loafers crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 6537,
        "stock": 89
    },
    {
        "title": "Classic Loafers 955",
        "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80",
        "description": "[\"High-quality loafers crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 5068,
        "stock": 74
    },
    {
        "title": "Ultra-Slim Running Shoes 376",
        "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80",
        "description": "[\"High-quality running shoes crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 5253,
        "stock": 94
    },
    {
        "title": "Vintage Sneakers 259",
        "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
        "description": "[\"High-quality sneakers crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 7285,
        "stock": 92
    },
    {
        "title": "Designer Loafers 600",
        "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80",
        "description": "[\"High-quality loafers crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 6880,
        "stock": 90
    },
    {
        "title": "Smart Running Shoes 613",
        "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80",
        "description": "[\"High-quality running shoes crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 7504,
        "stock": 5
    },
    {
        "title": "Smart Loafers 439",
        "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80",
        "description": "[\"High-quality loafers crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 3038,
        "stock": 54
    },
    {
        "title": "Ultra-Slim Running Shoes 648",
        "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80",
        "description": "[\"High-quality running shoes crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 5788,
        "stock": 57
    },
    {
        "title": "Smart Loafers 848",
        "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80",
        "description": "[\"High-quality loafers crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 6281,
        "stock": 82
    },
    {
        "title": "Casual Boots 929",
        "image": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&q=80",
        "description": "[\"High-quality boots crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 7600,
        "stock": 90
    },
    {
        "title": "Pro Sandals 544",
        "image": "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500&q=80",
        "description": "[\"High-quality sandals crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 5044,
        "stock": 102
    },
    {
        "title": "Smart Loafers 567",
        "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80",
        "description": "[\"High-quality loafers crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 3105,
        "stock": 89
    },
    {
        "title": "Luxury Sandals 894",
        "image": "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500&q=80",
        "description": "[\"High-quality sandals crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 3972,
        "stock": 101
    },
    {
        "title": "Ultra-Slim Running Shoes 470",
        "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80",
        "description": "[\"High-quality running shoes crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 6500,
        "stock": 23
    },
    {
        "title": "Ultra-Slim Boots 245",
        "image": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&q=80",
        "description": "[\"High-quality boots crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 7256,
        "stock": 45
    },
    {
        "title": "Casual Boots 478",
        "image": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&q=80",
        "description": "[\"High-quality boots crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 1386,
        "stock": 22
    },
    {
        "title": "Casual Boots 263",
        "image": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&q=80",
        "description": "[\"High-quality boots crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 2023,
        "stock": 55
    },
    {
        "title": "Casual Running Shoes 312",
        "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80",
        "description": "[\"High-quality running shoes crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 2265,
        "stock": 28
    },
    {
        "title": "Pro Sandals 481",
        "image": "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500&q=80",
        "description": "[\"High-quality sandals crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 4189,
        "stock": 92
    },
    {
        "title": "Ultra-Slim Boots 46",
        "image": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&q=80",
        "description": "[\"High-quality boots crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 5519,
        "stock": 51
    },
    {
        "title": "Premium Sandals 138",
        "image": "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500&q=80",
        "description": "[\"High-quality sandals crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 6199,
        "stock": 93
    },
    {
        "title": "Vintage Sandals 81",
        "image": "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500&q=80",
        "description": "[\"High-quality sandals crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 3530,
        "stock": 37
    },
    {
        "title": "Premium Loafers 506",
        "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80",
        "description": "[\"High-quality loafers crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 3394,
        "stock": 19
    },
    {
        "title": "Wireless Loafers 24",
        "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80",
        "description": "[\"High-quality loafers crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 1280,
        "stock": 29
    },
    {
        "title": "Classic Boots 59",
        "image": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&q=80",
        "description": "[\"High-quality boots crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 6337,
        "stock": 73
    },
    {
        "title": "Classic Sandals 690",
        "image": "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500&q=80",
        "description": "[\"High-quality sandals crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 7541,
        "stock": 11
    },
    {
        "title": "Pro Running Shoes 249",
        "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80",
        "description": "[\"High-quality running shoes crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 3036,
        "stock": 55
    },
    {
        "title": "Ultra-Slim Loafers 775",
        "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80",
        "description": "[\"High-quality loafers crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 2879,
        "stock": 77
    },
    {
        "title": "Wireless Loafers 371",
        "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80",
        "description": "[\"High-quality loafers crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 4321,
        "stock": 34
    },
    {
        "title": "Wireless Running Shoes 495",
        "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80",
        "description": "[\"High-quality running shoes crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 7963,
        "stock": 88
    },
    {
        "title": "Luxury Boots 610",
        "image": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&q=80",
        "description": "[\"High-quality boots crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 7745,
        "stock": 27
    },
    {
        "title": "Smart Loafers 170",
        "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80",
        "description": "[\"High-quality loafers crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 4756,
        "stock": 63
    },
    {
        "title": "Casual Loafers 805",
        "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80",
        "description": "[\"High-quality loafers crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 5377,
        "stock": 9
    },
    {
        "title": "Classic Sneakers 992",
        "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
        "description": "[\"High-quality sneakers crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 2129,
        "stock": 42
    },
    {
        "title": "Premium Sneakers 290",
        "image": "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&q=80",
        "description": "[\"High-quality sneakers crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 3417,
        "stock": 54
    },
    {
        "title": "Classic Sneakers 650",
        "image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
        "description": "[\"High-quality sneakers crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 6616,
        "stock": 76
    },
    {
        "title": "Vintage Running Shoes 8",
        "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80",
        "description": "[\"High-quality running shoes crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 6115,
        "stock": 88
    },
    {
        "title": "Classic Sneakers 709",
        "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
        "description": "[\"High-quality sneakers crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 5480,
        "stock": 42
    },
    {
        "title": "Pro Sneakers 998",
        "image": "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&q=80",
        "description": "[\"High-quality sneakers crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 7549,
        "stock": 104
    },
    {
        "title": "Luxury Boots 507",
        "image": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&q=80",
        "description": "[\"High-quality boots crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 6972,
        "stock": 32
    },
    {
        "title": "Classic Loafers 54",
        "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80",
        "description": "[\"High-quality loafers crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 1542,
        "stock": 68
    },
    {
        "title": "Designer Sandals 781",
        "image": "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500&q=80",
        "description": "[\"High-quality sandals crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 1023,
        "stock": 50
    },
    {
        "title": "Luxury Running Shoes 184",
        "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80",
        "description": "[\"High-quality running shoes crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Shoes",
        "price": 6267,
        "stock": 95
    },
    {
        "title": "Casual Watch 686",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
        "description": "[\"High-quality watch crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 2064,
        "stock": 13
    },
    {
        "title": "Wireless Wallet 167",
        "image": "https://images.unsplash.com/photo-1624419996924-d2c6c06a8f15?w=500&q=80",
        "description": "[\"High-quality wallet crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 558,
        "stock": 37
    },
    {
        "title": "Premium Watch 31",
        "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&q=80",
        "description": "[\"High-quality watch crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 2321,
        "stock": 89
    },
    {
        "title": "Casual Belt 176",
        "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80",
        "description": "[\"High-quality belt crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 3120,
        "stock": 5
    },
    {
        "title": "Pro Watch 696",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
        "description": "[\"High-quality watch crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 3995,
        "stock": 15
    },
    {
        "title": "Ultra-Slim Belt 765",
        "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80",
        "description": "[\"High-quality belt crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 2774,
        "stock": 41
    },
    {
        "title": "Vintage Belt 48",
        "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80",
        "description": "[\"High-quality belt crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 3693,
        "stock": 78
    },
    {
        "title": "Premium Wallet 204",
        "image": "https://images.unsplash.com/photo-1624419996924-d2c6c06a8f15?w=500&q=80",
        "description": "[\"High-quality wallet crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 4500,
        "stock": 53
    },
    {
        "title": "Classic Sunglasses 537",
        "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
        "description": "[\"High-quality sunglasses crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 4444,
        "stock": 73
    },
    {
        "title": "Smart Sunglasses 974",
        "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
        "description": "[\"High-quality sunglasses crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 2291,
        "stock": 87
    },
    {
        "title": "Ultra-Slim Backpack 975",
        "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
        "description": "[\"High-quality backpack crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 3813,
        "stock": 61
    },
    {
        "title": "Vintage Sunglasses 261",
        "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
        "description": "[\"High-quality sunglasses crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 669,
        "stock": 26
    },
    {
        "title": "Smart Backpack 457",
        "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
        "description": "[\"High-quality backpack crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 1999,
        "stock": 93
    },
    {
        "title": "Luxury Watch 139",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
        "description": "[\"High-quality watch crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 2982,
        "stock": 32
    },
    {
        "title": "Vintage Backpack 720",
        "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
        "description": "[\"High-quality backpack crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 4522,
        "stock": 49
    },
    {
        "title": "Premium Watch 358",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
        "description": "[\"High-quality watch crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 3817,
        "stock": 24
    },
    {
        "title": "Wireless Sunglasses 755",
        "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
        "description": "[\"High-quality sunglasses crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 2038,
        "stock": 50
    },
    {
        "title": "Smart Belt 66",
        "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80",
        "description": "[\"High-quality belt crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 4394,
        "stock": 51
    },
    {
        "title": "Wireless Backpack 198",
        "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
        "description": "[\"High-quality backpack crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 4428,
        "stock": 43
    },
    {
        "title": "Casual Sunglasses 388",
        "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
        "description": "[\"High-quality sunglasses crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 2116,
        "stock": 87
    },
    {
        "title": "Luxury Sunglasses 380",
        "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
        "description": "[\"High-quality sunglasses crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 4770,
        "stock": 94
    },
    {
        "title": "Designer Backpack 976",
        "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
        "description": "[\"High-quality backpack crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 4593,
        "stock": 84
    },
    {
        "title": "Premium Watch 221",
        "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&q=80",
        "description": "[\"High-quality watch crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 2929,
        "stock": 88
    },
    {
        "title": "Pro Belt 193",
        "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80",
        "description": "[\"High-quality belt crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 4223,
        "stock": 96
    },
    {
        "title": "Premium Backpack 913",
        "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
        "description": "[\"High-quality backpack crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 3304,
        "stock": 52
    },
    {
        "title": "Luxury Watch 363",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
        "description": "[\"High-quality watch crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 2202,
        "stock": 78
    },
    {
        "title": "Wireless Watch 80",
        "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&q=80",
        "description": "[\"High-quality watch crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 1692,
        "stock": 25
    },
    {
        "title": "Vintage Belt 501",
        "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80",
        "description": "[\"High-quality belt crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 3531,
        "stock": 64
    },
    {
        "title": "Classic Wallet 268",
        "image": "https://images.unsplash.com/photo-1624419996924-d2c6c06a8f15?w=500&q=80",
        "description": "[\"High-quality wallet crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 3103,
        "stock": 32
    },
    {
        "title": "Smart Watch 7",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
        "description": "[\"High-quality watch crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 1294,
        "stock": 22
    },
    {
        "title": "Designer Watch 982",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
        "description": "[\"High-quality watch crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 1175,
        "stock": 56
    },
    {
        "title": "Smart Watch 415",
        "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&q=80",
        "description": "[\"High-quality watch crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 4601,
        "stock": 74
    },
    {
        "title": "Ultra-Slim Sunglasses 532",
        "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
        "description": "[\"High-quality sunglasses crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 654,
        "stock": 96
    },
    {
        "title": "Vintage Belt 414",
        "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80",
        "description": "[\"High-quality belt crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 693,
        "stock": 40
    },
    {
        "title": "Smart Watch 776",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
        "description": "[\"High-quality watch crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 1946,
        "stock": 62
    },
    {
        "title": "Designer Belt 85",
        "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80",
        "description": "[\"High-quality belt crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 3755,
        "stock": 20
    },
    {
        "title": "Ultra-Slim Backpack 874",
        "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
        "description": "[\"High-quality backpack crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 2640,
        "stock": 19
    },
    {
        "title": "Designer Wallet 118",
        "image": "https://images.unsplash.com/photo-1624419996924-d2c6c06a8f15?w=500&q=80",
        "description": "[\"High-quality wallet crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 1325,
        "stock": 23
    },
    {
        "title": "Classic Watch 661",
        "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&q=80",
        "description": "[\"High-quality watch crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 1618,
        "stock": 29
    },
    {
        "title": "Ultra-Slim Sunglasses 254",
        "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
        "description": "[\"High-quality sunglasses crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 3441,
        "stock": 95
    },
    {
        "title": "Wireless Watch 862",
        "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&q=80",
        "description": "[\"High-quality watch crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 4762,
        "stock": 82
    },
    {
        "title": "Designer Backpack 104",
        "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
        "description": "[\"High-quality backpack crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 533,
        "stock": 5
    },
    {
        "title": "Classic Backpack 944",
        "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
        "description": "[\"High-quality backpack crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 2579,
        "stock": 79
    },
    {
        "title": "Vintage Watch 568",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
        "description": "[\"High-quality watch crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 814,
        "stock": 58
    },
    {
        "title": "Designer Sunglasses 846",
        "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
        "description": "[\"High-quality sunglasses crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 4141,
        "stock": 73
    },
    {
        "title": "Premium Sunglasses 70",
        "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
        "description": "[\"High-quality sunglasses crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 4255,
        "stock": 52
    },
    {
        "title": "Casual Watch 510",
        "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&q=80",
        "description": "[\"High-quality watch crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 4098,
        "stock": 5
    },
    {
        "title": "Smart Wallet 763",
        "image": "https://images.unsplash.com/photo-1624419996924-d2c6c06a8f15?w=500&q=80",
        "description": "[\"High-quality wallet crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 3705,
        "stock": 96
    },
    {
        "title": "Luxury Backpack 774",
        "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
        "description": "[\"High-quality backpack crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 3773,
        "stock": 83
    },
    {
        "title": "Wireless Sunglasses 544",
        "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
        "description": "[\"High-quality sunglasses crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 4263,
        "stock": 30
    },
    {
        "title": "Premium Watch 103",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
        "description": "[\"High-quality watch crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 901,
        "stock": 44
    },
    {
        "title": "Pro Backpack 367",
        "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
        "description": "[\"High-quality backpack crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 4321,
        "stock": 24
    },
    {
        "title": "Luxury Backpack 640",
        "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
        "description": "[\"High-quality backpack crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 802,
        "stock": 47
    },
    {
        "title": "Ultra-Slim Wallet 210",
        "image": "https://images.unsplash.com/photo-1624419996924-d2c6c06a8f15?w=500&q=80",
        "description": "[\"High-quality wallet crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 4753,
        "stock": 98
    },
    {
        "title": "Wireless Watch 62",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
        "description": "[\"High-quality watch crafted for maximum durability and style.\",\"Engineered with advanced precision for an unmatched premium feeling.\",\"1-Year Manufacturer Warranty included.\",\"Easy 7-Day Return Policy.\"]",
        "category": "Accessories",
        "price": 2977,
        "stock": 31
    }
];

module.exports = products;
