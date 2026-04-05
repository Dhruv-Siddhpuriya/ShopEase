import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Package, Truck, ArrowLeft, Trash2 } from 'lucide-react';

const ManageOrdersPage = () => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [confirmDeleteId, setConfirmDeleteId] = useState(null);
    const [successMsg, setSuccessMsg] = useState('');

    const showSuccess = (msg) => {
        setSuccessMsg(msg);
        setTimeout(() => setSuccessMsg(''), 3000);
    };

    const fetchOrders = async () => {
        try {
            setLoading(true);
            const { data } = await api.get('/orders');
            setOrders(data);
        } catch (err) {
            setError(err.response?.data?.message || err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchOrders(); }, []);

    const deliverHandler = async (id) => {
        try {
            await api.put(`/orders/${id}/deliver`);
            showSuccess('Order marked as delivered!');
            fetchOrders();
        } catch (err) {
            alert(err.response?.data?.message || err.message);
        }
    };

    const deleteHandler = async (id) => {
        try {
            await api.delete(`/orders/${id}`);
            setConfirmDeleteId(null);
            showSuccess('Order deleted successfully!');
            fetchOrders();
        } catch (err) {
            alert(err.response?.data?.message || err.message);
        }
    };

    return (
        <div className="max-w-7xl mx-auto">
            <button
                onClick={() => navigate('/admin')}
                className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 font-medium mb-6 transition group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Dashboard
            </button>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-8">All Orders</h1>

            {successMsg && (
                <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-2">
                    <span>✓</span> {successMsg}
                </div>
            )}

            {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 uppercase text-xs text-gray-500 tracking-wider">
                                <th className="p-4 font-semibold">ID</th>
                                <th className="p-4 font-semibold">User</th>
                                <th className="p-4 font-semibold">Date</th>
                                <th className="p-4 font-semibold text-right">Total</th>
                                <th className="p-4 font-semibold text-center">Status</th>
                                <th className="p-4 font-semibold text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {orders.map((order) => (
                                <tr key={order._id} className="hover:bg-gray-50 transition text-sm">
                                    <td className="p-4 font-medium text-gray-900">
                                        <div className="flex items-center gap-2">
                                            <Package className="w-4 h-4 text-indigo-500" />
                                            <span className="font-mono text-xs">{order._id.substring(0, 10)}…</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-gray-700">
                                        {order.user && order.user.name}
                                    </td>
                                    <td className="p-4 text-gray-600">
                                        {new Date(order.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="p-4 font-bold text-gray-900 text-right">
                                        ₹{order.totalAmount.toLocaleString('en-IN')}
                                    </td>
                                    <td className="p-4 text-center">
                                        {order.status === 'Delivered' ? (
                                            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                                                Delivered
                                            </span>
                                        ) : order.status === 'Cancelled' ? (
                                            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full">
                                                Cancelled
                                            </span>
                                        ) : (
                                            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
                                                {order.status}
                                            </span>
                                        )}
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center justify-center gap-2 flex-wrap">
                                            {order.status !== 'Delivered' && order.status !== 'Cancelled' && (
                                                <button
                                                    onClick={() => deliverHandler(order._id)}
                                                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow transition flex items-center gap-1"
                                                >
                                                    <Truck className="w-3 h-3" /> Mark Delivered
                                                </button>
                                            )}
                                            {confirmDeleteId === order._id ? (
                                                <div className="flex items-center gap-1">
                                                    <span className="text-xs text-gray-500">Sure?</span>
                                                    <button
                                                        onClick={() => deleteHandler(order._id)}
                                                        className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold hover:bg-red-700 transition"
                                                    >Yes</button>
                                                    <button
                                                        onClick={() => setConfirmDeleteId(null)}
                                                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-semibold hover:bg-gray-300 transition"
                                                    >No</button>
                                                </div>
                                            ) : (
                                                <button
                                                    onClick={() => setConfirmDeleteId(order._id)}
                                                    className="text-red-500 hover:bg-red-50 p-1.5 rounded-lg transition"
                                                    title="Delete Order"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            )}
                                        </div>
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

export default ManageOrdersPage;
