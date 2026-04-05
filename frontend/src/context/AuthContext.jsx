import React, { createContext, useState, useEffect } from 'react';
import api from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        try {
            const storedUser = sessionStorage.getItem('userInfo');
            return storedUser ? JSON.parse(storedUser) : null;
        } catch (e) {
            sessionStorage.removeItem('userInfo');
            return null;
        }
    });

    const login = async (email, password) => {
        const { data } = await api.post('/users/login', { email, password });
        setUser(data);
        sessionStorage.setItem('userInfo', JSON.stringify(data));
    };

    const register = async (name, email, password) => {
        const { data } = await api.post('/users', { name, email, password });
        setUser(data);
        sessionStorage.setItem('userInfo', JSON.stringify(data));
    };

    const logout = () => {
        setUser(null);
        sessionStorage.removeItem('userInfo');
    };

    return (
        <AuthContext.Provider value={{ user, setUser, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
