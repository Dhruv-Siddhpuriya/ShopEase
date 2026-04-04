import React from 'react';
import { Link } from 'react-router-dom';
import { Package, ShoppingBag, Users, LayoutDashboard } from 'lucide-react';

const AdminDashboard = () => {
    return (
        <div className="max-w-7xl mx-auto">
             <div className="flex items-center gap-3 mb-8">
                <LayoutDashboard className="w-8 h-8 text-indigo-600" />
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Admin Dashboard</h1>
             </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Manage Products Card */}
                <Link to="/admin/products" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all group hover:-translate-y-1">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                            <ShoppingBag className="w-8 h-8 text-indigo-600 group-hover:text-white" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Manage Products</h3>
                    <p className="text-gray-500">Create, edit, or delete items from the store catalog.</p>
                </Link>

                {/* Manage Orders Card */}
                <Link to="/admin/orders" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all group hover:-translate-y-1">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Package className="w-8 h-8 text-blue-600 group-hover:text-white" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Manage Orders</h3>
                    <p className="text-gray-500">View and update customer order statuses.</p>
                </Link>

                {/* Manage Users Card */}
                <Link to="/admin/users" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all group hover:-translate-y-1">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-purple-50 border border-purple-100 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-colors">
                            <Users className="w-8 h-8 text-purple-600 group-hover:text-white" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Manage Users</h3>
                    <p className="text-gray-500">View registered users and manage their roles.</p>
                </Link>
            </div>
        </div>
    );
};

export default AdminDashboard;
