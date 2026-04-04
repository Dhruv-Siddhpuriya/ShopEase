import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { ShieldAlert, User, Trash2, Edit, ArrowLeft, Users } from 'lucide-react';

const ManageUsersPage = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data } = await api.get('/users');
                setUsers(data);
                setLoading(false);
            } catch (err) {
                setError(err.response?.data?.message || err.message);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="max-w-6xl mx-auto">
            <button
                onClick={() => navigate('/admin')}
                className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 font-medium mb-6 transition group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Dashboard
            </button>
            <div className="flex items-center gap-3 mb-8">
                <Users className="w-7 h-7 text-purple-600" />
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Registered Users</h1>
            </div>

            {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 uppercase text-xs text-gray-500 tracking-wider">
                                <th className="p-4 font-semibold">ID</th>
                                <th className="p-4 font-semibold">Name</th>
                                <th className="p-4 font-semibold">Email</th>
                                <th className="p-4 font-semibold text-center">Role</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {users.map((user) => (
                                <tr key={user._id} className="hover:bg-gray-50 transition text-sm">
                                    <td className="p-4 font-medium text-gray-900">
                                        {user._id.substring(0, 8)}
                                    </td>
                                    <td className="p-4 text-gray-800 font-medium">
                                        {user.name}
                                    </td>
                                    <td className="p-4">
                                        <a href={`mailto:${user.email}`} className="text-indigo-600 hover:underline">
                                            {user.email}
                                        </a>
                                    </td>
                                    <td className="p-4 text-center">
                                         {user.role === 'admin' ? (
                                              <span className="inline-flex items-center text-red-600 font-bold bg-red-50 px-2 py-1 rounded">
                                                  <ShieldAlert className="w-4 h-4 mr-1" /> Admin
                                              </span>
                                         ) : (
                                            <span className="inline-flex items-center text-gray-600 font-medium bg-gray-50 px-2 py-1 rounded border border-gray-200">
                                                  <User className="w-4 h-4 mr-1" /> Customer
                                              </span>
                                         )}
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

export default ManageUsersPage;
