import React, { createContext, useState, useEffect, useContext } from "react";

// Create the context
export const CartContext = createContext();

// Create the provider component
export const CartProvider = ({ children }) => {
  // Initialize state with data from local storage
  const [cart, setCart] = useState(() => {
    try {
      const localData = localStorage.getItem("firecrackerCart");
      // Parse the JSON data if it exists, otherwise return an empty array
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Failed to load cart from local storage", error);
      return [];
    }
  });

  // Use a useEffect hook to save the cart to local storage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("firecrackerCart", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart to local storage", error);
    }
  }, [cart]); // The dependency array ensures this effect runs whenever 'cart' changes

  const addToCart = (item, quantity) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.variety === item.variety
      );
      if (existingItemIndex > -1) {
        const newCart = [...prevCart];
        const updatedItem = {
          ...newCart[existingItemIndex],
          quantity: newCart[existingItemIndex].quantity + quantity,
        };
        updatedItem.totalAmount =
          updatedItem.quantity * updatedItem.rate_per_unit;
        newCart[existingItemIndex] = updatedItem;
        return newCart;
      } else {
        return [
          ...prevCart,
          {
            ...item,
            quantity: quantity,
            totalAmount: quantity * item.rate_per_unit,
          },
        ];
      }
    });
  };

  // 🟢 NEW: Function to update item quantity
  const updateQuantity = (variety, change) => {
    setCart((prevCart) => {
      const newCart = prevCart
        .map((item) => {
          if (item.variety === variety) {
            const newQuantity = Math.max(0, item.quantity + change);
            if (newQuantity === 0) {
              return null; // Mark the item for removal if quantity is 0
            }
            return {
              ...item,
              quantity: newQuantity,
              totalAmount: newQuantity * item.rate_per_unit,
            };
          }
          return item;
        })
        .filter(Boolean); // Filter out any items that are null

      return newCart;
    });
  };

  const removeFromCart = (variety) => {
    setCart((prevCart) => prevCart.filter((item) => item.variety !== variety));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalCost = () => {
    return cart.reduce((total, item) => total + item.totalAmount, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalCost,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};
