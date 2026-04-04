import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Trash2, ArrowRight } from 'lucide-react';
import Message from '../components/Message';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, cartCount, cartTotal } = useContext(CartContext);
    const navigate = useNavigate();

    const checkoutHandler = () => {
        navigate('/login?redirect=/checkout');
    };

    if (!cart || !cart.items || cart.items.length === 0) {
        return (
            <div className="max-w-4xl mx-auto text-center mt-12 mb-32">
                 <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart is Empty</h2>
                 <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
                 <Link to="/" className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition shadow-lg">
                    Go Back Shopping
                 </Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-8">Shopping Cart</h1>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Cart Items List */}
                <div className="w-full lg:w-2/3">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">
                        {cart.items.map((item) => (
                            <div key={item._id} className="p-6 flex flex-col sm:flex-row items-center gap-6 hover:bg-gray-50 transition">
                                <Link to={`/product/${item.product._id}`} className="flex-shrink-0">
                                    <img 
                                        src={item.product.image} 
                                        alt={item.product.title} 
                                        className="w-24 h-24 sm:w-32 sm:h-32 object-contain bg-white rounded-lg border border-gray-100"
                                    />
                                </Link>
                                
                                <div className="flex-grow flex flex-col justify-center text-center sm:text-left h-full">
                                    <Link to={`/product/${item.product._id}`} className="text-lg font-bold text-gray-900 hover:text-indigo-600 transition mb-2">
                                        {item.product.title}
                                    </Link>
                                    <p className="text-sm text-gray-500 mb-2">{item.product.category}</p>
                                    <div className="text-xl font-bold text-indigo-600">₹{item.product.price.toLocaleString('en-IN')}</div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <select 
                                        value={item.quantity}
                                        onChange={(e) => updateQuantity(item._id, Number(e.target.value))}
                                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                                    >
                                        {[...Array(item.product.stock > 10 ? 10 : item.product.stock).keys()].map(x => (
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                        ))}
                                    </select>

                                    <button 
                                        onClick={() => removeFromCart(item._id)}
                                        className="p-2 text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 rounded-lg transition"
                                        title="Remove Item"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cart Summary */}
                <div className="w-full lg:w-1/3">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sticky top-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
                        <div className="flex justify-between items-center text-gray-600 mb-4 pb-4 border-b">
                            <span>Subtotal ({cartCount} items)</span>
                            <span className="font-semibold text-gray-900">₹{cartTotal.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-xl font-bold text-gray-900">Total</span>
                            <span className="text-3xl font-extrabold text-indigo-600">
                                ₹{cartTotal.toLocaleString('en-IN')}
                            </span>
                        </div>

                        <button 
                            type="button" 
                            disabled={cart.items.length === 0}
                            onClick={checkoutHandler}
                            className={`w-full py-4 rounded-xl flex items-center justify-center font-bold text-lg transition-all shadow-lg ${
                                cart.items.length === 0 
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                                : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-500/30'
                            }`}
                        >
                            Proceed To Checkout
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
