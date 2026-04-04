import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../api';
import { AuthContext } from './AuthContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(null);
    const { user } = useContext(AuthContext);

    const fetchCart = async () => {
        try {
            const { data } = await api.get('/cart');
            setCart(data);
        } catch (error) {
            console.error("Error fetching cart", error);
        }
    };

    useEffect(() => {
        if (user) {
            fetchCart();
        } else {
            setCart(null);
        }
    }, [user]);

    const addToCart = async (productId, quantity) => {
        try {
             const { data } = await api.post('/cart', { productId, quantity });
             setCart(data);
        } catch(err) {
            console.error('Error adding to cart', err);
        }
    };

    const updateQuantity = async (itemId, quantity) => {
        try {
            const { data } = await api.put(`/cart/${itemId}`, { quantity });
            setCart(data);
        } catch(err) {
             console.error('Error updating cart', err);
        }
    }

    const removeFromCart = async (itemId) => {
        try {
            const { data } = await api.delete(`/cart/${itemId}`);
            setCart(data);
        } catch (error) {
            console.error("Error removing item", error);
        }
    };

    const clearCart = async () => {
        try {
            await api.delete('/cart');
            setCart({ ...cart, items: [] });
        } catch (error) {
            console.error("Error clearing cart", error);
        }
    }

    const cartCount = cart?.items?.reduce((acc, item) => acc + item.quantity, 0) || 0;
    const cartTotal = cart?.items?.reduce((acc, item) => acc + (item.product.price * item.quantity), 0) || 0;

    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart, cartCount, cartTotal }}>
            {children}
        </CartContext.Provider>
    );
};
