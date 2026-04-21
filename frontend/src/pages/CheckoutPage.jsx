import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Message from '../components/Message';
import api from '../api';
import { CreditCard, Truck, CheckCircle, ArrowLeft } from 'lucide-react';
import { loadScript } from '../utils/loadScript';

const CheckoutPage = () => {
    const { cart, cartTotal, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('Razorpay');
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    // Removed the aggressive redirect useEffect to prevent race conditions 
    // where successful orders abruptly redirected to an empty cart.

    const placeOrderHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const orderItems = cart.items.map(i => ({
            product: i.product._id,
            title: i.product.title,
            image: i.product.image,
            price: i.product.price,
            quantity: i.quantity
        }));

        try {
            const { data: createdOrder } = await api.post('/orders', {
                orderItems,
                shippingAddress: { address, city, postalCode, country },
                paymentMethod,
                totalAmount: cartTotal
            });

            if (paymentMethod === 'Razorpay') {
                const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
                if (!res) {
                    setError('Razorpay SDK failed to load. Are you offline?');
                    setLoading(false);
                    return;
                }

                const { data: rzpOrder } = await api.post('/orders/razorpay', {
                    amount: cartTotal
                });

                const options = {
                    key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_YOUR_KEY_ID_HERE',
                    amount: rzpOrder.amount,
                    currency: "INR",
                    name: "ShopEase",
                    description: "Order Checkout",
                    order_id: rzpOrder.id,
                    handler: async function (response) {
                        try {
                            await api.put(`/orders/${createdOrder._id}/pay`, {
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_signature: response.razorpay_signature,
                            });
                            setSuccess(true);
                            await clearCart();
                            setTimeout(() => {
                                navigate('/orders');
                            }, 3000);
                        } catch (err) {
                            setError('Payment verification failed');
                            setLoading(false);
                        }
                    },
                    prefill: {
                        name: "ShopEase Customer",
                        email: "customer@example.com",
                        contact: "9999999999"
                    },
                    theme: {
                        color: "#4f46e5"
                    }
                };

                const paymentObject = new window.Razorpay(options);
                paymentObject.on('payment.failed', function (response) {
                    setError('Payment failed. Please try again.');
                    setLoading(false);
                });
                paymentObject.open();

            } else {
                setSuccess(true);
                await clearCart();
                
                setTimeout(() => {
                    navigate('/orders');
                }, 3000);
            }
            
        } catch (err) {
            setError(err.response?.data?.message || err.message);
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                 <CheckCircle className="w-24 h-24 text-green-500 mb-6 mx-auto animate-bounce" />
                 <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Order Placed Successfully!</h2>
                 <p className="text-xl text-gray-600 mb-8">Thank you for your purchase. We are processing it right now.</p>
                 <p className="text-gray-500">Redirecting to your orders...</p>
            </div>
        )
    }

    if (!cart) {
         return <div className="flex justify-center mt-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div></div>;
    }

    if (!success && cart.items && cart.items.length === 0) {
         return (
             <div className="max-w-4xl mx-auto text-center mt-32 mb-32">
                 <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart is Empty</h2>
                 <p className="text-gray-500 mb-8">Add items to your cart before proceeding to checkout.</p>
                 <button onClick={() => navigate('/')} className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition shadow-lg">
                    Go Shopping
                 </button>
             </div>
         );
    }

    return (
        <div className="max-w-4xl mx-auto pb-16">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 font-medium mb-6 transition group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back
            </button>

            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-8">Checkout</h1>
            
            {error && <Message variant="danger">{error}</Message>}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                    {/* Shipping Address Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-6">
                            <Truck className="w-8 h-8 text-indigo-600" />
                            <h2 className="text-2xl font-bold text-gray-900">Shipping Details</h2>
                        </div>
                        
                        <form id="checkout-form" onSubmit={placeOrderHandler} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                <input
                                    type="text"
                                    required
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                    <input
                                        type="text"
                                        required
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                                    <input
                                        type="text"
                                        required
                                        value={postalCode}
                                        onChange={(e) => setPostalCode(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                                <input
                                    type="text"
                                    required
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600"
                                />
                            </div>
                        </form>
                    </div>

                    {/* Payment Method Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mt-8">
                        <div className="flex items-center gap-3 mb-6">
                            <CreditCard className="w-8 h-8 text-indigo-600" />
                            <h2 className="text-2xl font-bold text-gray-900">Payment Method</h2>
                        </div>
                        <div className="space-y-4">
                            {['Razorpay', 'Credit Card', 'PayPal', 'Cash on Delivery'].map(method => (
                                <label key={method} className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === method ? 'border-indigo-600 bg-indigo-50 shadow-sm' : 'border-gray-200 hover:border-indigo-300'}`}>
                                    <input 
                                        type="radio" 
                                        name="paymentMethod"
                                        value={method} 
                                        checked={paymentMethod === method}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                                    />
                                    <span className="ml-3 font-semibold text-gray-800">{method}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Order Summary sidebar */}
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 h-fit sticky top-24">
                    <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Order Summary</h2>
                    
                    <div className="space-y-4 mb-6 max-h-64 overflow-y-auto pr-2">
                        {cart?.items?.map((item) => (
                            <div key={item._id} className="flex justify-between text-sm">
                                <span className="text-gray-600 flex-1 truncate pr-4">{item.quantity} x {item.product.title}</span>
                                <span className="font-semibold text-gray-900">₹{(item.quantity * item.product.price).toLocaleString('en-IN')}</span>
                            </div>
                        ))}
                    </div>
                    
                    <div className="border-t pt-4 space-y-3 mb-8">
                        <div className="flex justify-between text-xl font-bold text-gray-900">
                            <span>Total</span>
                            <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                        </div>
                    </div>

                    <div className="bg-indigo-50 text-indigo-800 p-4 rounded-lg mb-6 flex items-start gap-3">
                         <CreditCard className="w-5 h-5 flex-shrink-0 mt-0.5" />
                         <p className="text-sm font-medium">Paying with <strong className="font-bold">{paymentMethod}</strong></p>
                    </div>

                    <button
                        type="submit"
                        form="checkout-form"
                        disabled={loading}
                        className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition shadow-lg disabled:opacity-70 flex items-center justify-center"
                    >
                        {loading ? 'Processing...' : 'Place Order'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
