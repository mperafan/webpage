import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";


export const ShopContext = createContext(null);

//Project: add sizes

/*const getDefaultCart = () => {
    let cart = {}
    for (let i=1;i<PRODUCTS.length +1; i++){
        cart[i] = {
            S: 0,
            M: 0,
            L: 0,
            XL: 0,
            XXL: 0,
            XXXL: 0,
            XXXXL: 0,
            XXXXXL: 0,
        };
    }
    return cart;
};*/

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };
  

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
            totalAmount += cartItems[item] * itemInfo.price;
          }
        }
        return totalAmount;
      };

   /* const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            for(const itemj in item){
                if(cartItems[item][itemj] > 0 ){
                    let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                    totalAmount += cartItems[item][itemj] * itemInfo.price;
                }
            }
        };
        return totalAmount;
    };*/

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    };
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    };
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}));
    }

    const checkout = () => {
        setCartItems(getDefaultCart());
      };

    const contextValue= {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, checkout};
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};