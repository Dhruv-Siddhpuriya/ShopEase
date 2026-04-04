import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const AdminRoute = () => {
    const { user } = useContext(AuthContext);

    if (user && user.role === 'admin') {
        return <Outlet />;
    }

    return <Navigate to="/login" replace />;
};

export default AdminRoute;
