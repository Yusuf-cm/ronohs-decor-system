// In src/context/CartContext.js

"use client";

// --- STEP 1: Import useCallback ---
import { createContext, useState, useContext, useEffect, useCallback } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  // Load cart from localStorage on initial load (client-side only)
  useEffect(() => {
    try {
      const items = localStorage.getItem('cartItems');
      if (items) {
        const parsed = JSON.parse(items);
        setCartItems(Array.isArray(parsed) ? parsed.filter(item => item && item.id && Number.isFinite(Number(item.price)) && Number(item.price) >= 0 && Number.isSafeInteger(item.quantity) && item.quantity > 0) : []);
      }
    } catch (error) {
      console.error("Failed to parse cart items from localStorage", error);
      // Clear corrupted data
      localStorage.removeItem('cartItems');
    }
    setHydrated(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    // Only run on client-side and after initial load
    if (hydrated) {
      try { localStorage.setItem('cartItems', JSON.stringify(cartItems)); } catch { /* Storage may be unavailable in private browsing. */ }
    }
  }, [cartItems, hydrated]);

  // --- STEP 2: Wrap all functions in useCallback ---

  const addToCart = useCallback((product) => {
    if (!product?.id || !Number.isFinite(Number(product.price)) || Number(product.price) < 0 || Number(product.stock) === 0) return;
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  }, []); // Empty dependency array: this function never needs to be recreated.

  const removeFromCart = useCallback((productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  }, []); // Empty dependency array.

  const updateQuantity = useCallback((productId, quantity) => {
    // We need to reference `removeFromCart` inside, so we must make sure it's stable.
    // Since `removeFromCart` is now wrapped in useCallback, this is safe.
    quantity = Number(quantity);
    if (!Number.isSafeInteger(quantity)) return;
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId ? { ...item, quantity: quantity } : item
        )
      );
    }
  }, [removeFromCart]); // Add `removeFromCart` as a dependency.

// In src/context/CartContext.js

const clearCart = useCallback(() => {
  // 1. Update the React state to an empty array
  setCartItems([]);

  // 2. Explicitly remove the item from localStorage immediately
  localStorage.removeItem('cartItems');
}, []); // The dependency array remains empty

  // --- STEP 3: Memoize the calculated total (optional but good practice) ---
  const cartTotal = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  // --- STEP 4: Define the context value ---
 const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
