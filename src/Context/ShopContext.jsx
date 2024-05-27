import React, { createContext, useEffect, useState } from 'react';
import request from '~/Utils/httpRequest';
import storage from '~/Utils/storage';

const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = ({ children }) => {
    const [allProduct, setAllProduct] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        try {
            request.get('product/allproducts').then((res) => {
                setAllProduct(res.data);
            });

            if (storage.get()) {
                request({
                    method: 'POST',
                    url: 'cart/getcart',
                    headers: {
                        Accept: 'application/json',
                        'auth-token': `${storage.get()}`,
                        'Content-Type': 'application/json',
                    },
                }).then((response) => {
                    setCartItems(response.data);
                });
            }
        } catch (err) {
            console.log(err);
        }
    }, []);

    const addToCart = (itemId) => {
        if (!storage.get()) return;

        try {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

            request({
                method: 'POST',
                url: 'cart/addtocart',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                data: {
                    itemId,
                },
            });
        } catch (err) {
            console.log(err);
        }
    };

    const removeFromCart = (itemId) => {
        if (!storage.get()) return;

        try {
            setCartItems((prev) => ({ ...prev, [itemId]: 0 }));

            request({
                method: 'DELETE',
                url: 'cart/removefromcart',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                data: {
                    itemId,
                },
            });
        } catch (err) {
            console.log(err);
        }
    };

    const removeOneItem = (itemId) => {
        if (!storage.get()) return;

        try {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
            request({
                method: 'DELETE',
                url: 'cart/removeOneItem',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                data: {
                    itemId,
                },
            });
        } catch (err) {
            console.log(err);
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = allProduct.find((product) => product._id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    const contextValue = {
        allProduct,
        cartItems,
        addToCart,
        removeFromCart,
        removeOneItem,
        getTotalCartAmount,
        getTotalCartItems,
    };

    return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};

export { ShopContext, ShopContextProvider };
