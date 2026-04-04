import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Package, Clock, CheckCircle } from 'lucide-react';

const OrderHistoryPage = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const { data } = await api.get('/orders/myorders');
                setOrders(data);
                setLoading(false);
            } catch (err) {
                setError(err.response?.data?.message || err.message);
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-8">Order History</h1>
            
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : orders.length === 0 ? (
                <Message variant="info">You do not have any past orders.</Message>
            ) : (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100">
                                <th className="p-4 font-semibold text-gray-600">Order ID</th>
                                <th className="p-4 font-semibold text-gray-600">Date</th>
                                <th className="p-4 font-semibold text-gray-600">Total</th>
                                <th className="p-4 font-semibold text-gray-600">Status</th>
                                <th className="p-4 font-semibold text-gray-600">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {orders.map((order) => (
                                <tr key={order._id} className="hover:bg-gray-50 transition">
                                    <td className="p-4 text-sm font-medium text-gray-900">
                                        <div className="flex items-center gap-2">
                                            <Package className="w-4 h-4 text-indigo-500" />
                                            #{order._id.substring(0, 8)}...
                                        </div>
                                    </td>
                                    <td className="p-4 text-sm text-gray-600">
                                        {new Date(order.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="p-4 font-bold text-gray-900">
                                        ₹{order.totalAmount.toLocaleString('en-IN')}
                                    </td>
                                    <td className="p-4 text-sm">
                                        {order.status === 'Delivered' ? (
                                             <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">
                                                <CheckCircle className="w-3 h-3 mr-1" /> Delivered
                                             </span>
                                        ) : (
                                              <span className="inline-flex items-center bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-1 rounded-full">
                                                <Clock className="w-3 h-3 mr-1" /> {order.status}
                                             </span>
                                        )}
                                    </td>
                                    <td className="p-4">
                                        <button className="text-indigo-600 hover:underline hover:text-indigo-800 font-medium text-sm">
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default OrderHistoryPage;
