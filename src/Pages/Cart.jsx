import React from 'react';
import './SCSS/Cart.scss';
import CartItems from '~/Components/CartItems/CartItems';
import CartTotal from '~/Components/CartTotal/CartTotal';

const Cart = () => {
    return (
        <div className="cart">
            <div className="container">
                <CartItems />
                <CartTotal />
            </div>
        </div>
    );
};

export default Cart;
