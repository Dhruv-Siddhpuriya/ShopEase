import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart, User, LogOut, Settings, Search, ChevronDown, Menu, X } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

// ─── Flipkart-style category icons (inline SVG components) ───────────────────
const CategoryBar = () => {
  const categories = [
    {
      name: 'For You',
      slug: '',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12z"/>
        </svg>
      ),
      color: 'text-blue-600'
    },
    {
      name: 'Fashion',
      slug: 'Fashion',
      icon: (
        <svg viewBox="0 0 64 64" fill="currentColor" className="w-7 h-7">
          <path d="M24 4c0 4.42-3.58 8-8 8L4 8l8 16h8v28h24V24h8L60 8 48 12c-4.42 0-8-3.58-8-8H24z"/>
        </svg>
      ),
      color: 'text-pink-500'
    },
    {
      name: 'Mobiles',
      slug: 'Mobiles',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
        </svg>
      ),
      color: 'text-gray-700'
    },
    {
      name: 'Electronics',
      slug: 'Electronics',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
        </svg>
      ),
      color: 'text-blue-700'
    },
    {
      name: 'Home',
      slug: 'Home & Kitchen',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      ),
      color: 'text-orange-500'
    },
    {
      name: 'Appliances',
      slug: 'Appliances',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3-8H9V4h6v4z"/>
        </svg>
      ),
      color: 'text-teal-600'
    },
    {
      name: 'Beauty',
      slug: 'Beauty',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5C18.4 8.87 17.28 7.75 15.9 7.75c-.53 0-1.01.16-1.42.44l.02-.19c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5z"/>
        </svg>
      ),
      color: 'text-rose-500'
    },
    {
      name: 'Toys',
      slug: 'Toys',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5s-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"/>
        </svg>
      ),
      color: 'text-yellow-500'
    },
    {
      name: 'Sports',
      slug: 'Sports',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/>
        </svg>
      ),
      color: 'text-green-600'
    },
    {
      name: 'Food & More',
      slug: 'Grocery',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-3.5-3.13-5.86-6.9-5.99H1.02C1.02 9 1.01 9 1 9v13h15.03v-7.01z"/>
        </svg>
      ),
      color: 'text-amber-600'
    },
    {
      name: 'Auto',
      slug: 'Automotive',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
        </svg>
      ),
      color: 'text-slate-600'
    },
    {
      name: '2 Wheelers',
      slug: 'Two-Wheelers',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M19 7c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 14H10V9H6c-2.21 0-4 1.79-4 4s1.79 4 4 4h1v-2H6c-1.1 0-2-.9-2-2s.9-2 2-2h2v4h4.48L16 10.35V7h3zm0 8.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-3c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      ),
      color: 'text-indigo-600'
    },
    {
      name: 'Books',
      slug: 'Books',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
        </svg>
      ),
      color: 'text-purple-600'
    },
    {
      name: 'Furniture',
      slug: 'Furniture',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M20 10V7c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L2 19h2l.67-2h10.67L16 19h2l.67-2H20v-5c0-1.1-.9-2-2-2zm-9 0H4V7h7v3zm9 0h-7V7h5v3h2z"/>
        </svg>
      ),
      color: 'text-brown-600'
    },
  ];

  const navigate = useNavigate();

  const handleCategoryClick = (slug) => {
    if (slug === '') {
      navigate('/');
    } else {
      navigate(`/?category=${encodeURIComponent(slug)}`);
    }
  };

  return (
    <div className="bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div
          className="flex items-center gap-1 overflow-x-auto py-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => handleCategoryClick(cat.slug)}
              className="flex flex-col items-center justify-center min-w-[76px] px-3 py-2 rounded-lg hover:bg-blue-50 transition-all group flex-shrink-0"
            >
              <div className={`${cat.color} mb-1.5 group-hover:scale-110 transition-transform duration-200`}>
                {cat.icon}
              </div>
              <span className="text-xs font-semibold text-gray-700 group-hover:text-blue-600 whitespace-nowrap leading-tight text-center">
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── Main Navbar ─────────────────────────────────────────────────────────────
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { cartCount } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [keyword, setKeyword] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hide category bar on admin, profile, cart, checkout, login, register pages
  const hideCategoryBar = 
    location.pathname.startsWith('/admin') ||
    location.pathname.startsWith('/profile') ||
    location.pathname === '/cart' ||
    location.pathname === '/checkout' ||
    location.pathname === '/login' ||
    location.pathname === '/register';

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/?keyword=${keyword}`);
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="bg-white sticky top-0 z-50" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      {/* ── Top Bar ── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <ShoppingCart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-extrabold text-indigo-600 tracking-tight hidden sm:block">ShopEase</span>
          </Link>

          {/* Search Bar */}
          <form onSubmit={submitHandler} className="flex-1 max-w-2xl hidden md:flex relative">
            <input
              type="text"
              placeholder="Search for products, brands and more..."
              className="w-full pl-4 pr-12 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 text-sm"
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-full px-4 text-white bg-indigo-600 rounded-r-lg hover:bg-indigo-700 transition"
            >
              <Search className="h-5 w-5" />
            </button>
          </form>

          {/* Right Actions */}
          <div className="flex items-center gap-5 shrink-0 ml-auto">
            {/* Cart */}
            <Link to="/cart" className="relative text-gray-700 hover:text-indigo-600 transition flex flex-col items-center">
              <div className="relative">
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </div>
              <span className="text-xs font-semibold hidden sm:block">Cart</span>
            </Link>

            {/* Admin */}
            {user?.role === 'admin' && (
              <Link to="/admin" className="hidden lg:flex flex-col items-center text-gray-700 hover:text-indigo-600 transition">
                <Settings className="h-6 w-6" />
                <span className="text-xs font-semibold">Admin</span>
              </Link>
            )}

            {/* User Menu */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex flex-col items-center text-gray-700 hover:text-indigo-600 transition"
                >
                  <User className="h-6 w-6" />
                  <span className="text-xs font-semibold flex items-center gap-0.5">
                    <span className="hidden sm:block truncate max-w-[70px]">{user.name.split(' ')[0]}</span>
                    <ChevronDown className={`h-3 w-3 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
                  </span>
                </button>
                {isMenuOpen && (
                  <div
                    className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-2xl py-2 z-50 border border-gray-100"
                    onMouseLeave={() => setIsMenuOpen(false)}
                  >
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-bold text-gray-900 truncate">Hello, {user.name.split(' ')[0]}!</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>
                    <Link to="/profile?tab=dashboard" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium transition">
                      <User className="w-4 h-4" /> Your Account
                    </Link>
                    <Link to="/profile?tab=orders" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium transition">
                      <ShoppingCart className="w-4 h-4" /> Your Orders
                    </Link>
                    {user.role === 'admin' && (
                      <Link to="/admin" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium transition">
                        <Settings className="w-4 h-4" /> Admin Panel
                      </Link>
                    )}
                    <hr className="my-1 border-gray-100" />
                    <button
                      onClick={() => { setIsMenuOpen(false); handleLogout(); }}
                      className="flex items-center gap-2 w-full text-left px-4 py-2.5 text-sm font-bold text-red-600 hover:bg-red-50 transition"
                    >
                      <LogOut className="w-4 h-4" /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/login" className="text-sm font-semibold text-gray-700 hover:text-indigo-600 transition hidden sm:block">Login</Link>
                <Link to="/register" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition shadow-sm">Sign Up</Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Mobile Search ── */}
      <div className="md:hidden px-4 pb-3 bg-white">
        <form onSubmit={submitHandler} className="flex relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-4 pr-12 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 text-sm"
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
          />
          <button type="submit" className="absolute right-0 top-0 h-full px-4 text-white bg-indigo-600 rounded-r-lg">
            <Search className="h-4 w-4" />
          </button>
        </form>
      </div>

      {/* ── Flipkart-style Category Bar ── */}
      {!hideCategoryBar && <CategoryBar />}
    </nav>
  );
};

export default Navbar;
