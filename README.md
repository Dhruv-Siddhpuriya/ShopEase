# 🛍️ ShopEase — MERN Stack E-Commerce Platform

A full-featured e-commerce web application built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js). ShopEase provides a seamless online shopping experience with a rich product catalog, shopping cart, user authentication, order management, and an admin dashboard.

---

## ✨ Features

### 👤 User Features
- Register / Login with JWT authentication
- Browse 200+ products across multiple categories
- Search and filter products by category, price, and rating
- Add to cart and manage quantities
- Checkout and place orders
- View order history and track order status
- Manage profile, addresses, and payment methods

### 🛠️ Admin Features
- Admin dashboard with order & product overview
- Add, edit, and delete products with multi-image upload
- Manage and update order statuses

---

## 🧰 Tech Stack

| Layer      | Technology                          |
|------------|--------------------------------------|
| Frontend   | React.js (Vite), CSS                 |
| Backend    | Node.js, Express.js                  |
| Database   | MongoDB (Mongoose ODM)               |
| Auth       | JSON Web Tokens (JWT)                |
| File Upload| Multer                               |

---

## 📁 Project Structure

```
ShopEase/
├── backend/
│   ├── config/         # DB connection
│   ├── controllers/    # Route logic
│   ├── middleware/     # Auth & error handling
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API routes
│   ├── uploads/        # Uploaded product images
│   └── server.js       # Entry point
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/ # Reusable UI components
│       ├── context/    # React context (Auth, Cart)
│       ├── pages/      # Page components
│       └── main.jsx
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- MongoDB (local or Atlas)

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/ShopEase.git
cd ShopEase
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/shopease
JWT_SECRET=your_jwt_secret_here
```

```bash
npm start
```

### 3. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 📄 License
This project is for educational purposes.
