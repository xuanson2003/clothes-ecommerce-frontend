import React, { createContext } from 'react';

const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
    return <ShopContext.Provider value={null}>{children}</ShopContext.Provider>;
};

export { ShopContext, ShopContextProvider };
