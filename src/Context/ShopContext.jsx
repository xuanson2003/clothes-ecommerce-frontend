import React, { createContext, useState } from 'react';

const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    return <ShopContext.Provider>{children}</ShopContext.Provider>;
};

export { ShopContext, ShopContextProvider };
