import React, { useContext } from 'react';
import './CartTotal.scss';
import { ShopContext } from '~/Context/ShopContext';

const CartTotal = () => {
    const { getTotalCartAmount } = useContext(ShopContext);
    const total = getTotalCartAmount();
    return (
        <div className="cart-total">
            <div className="cart-total-main">
                <div className="cart-total-main-container">
                    <h2>Tổng tiền giỏ hàng</h2>

                    <div className="cart-total-main-item">
                        <p>Tổng phụ</p>
                        <p>{total.toLocaleString('vi-VN')} ₫</p>
                    </div>
                    <hr />
                    <div className="cart-total-main-item">
                        <p>Phí vận chuyển</p>
                        <p>Miễn phí</p>
                    </div>
                    <hr />
                    <div className="cart-total-main-item">
                        <h3>Tổng tiền</h3>
                        <h3>{total.toLocaleString('vi-VN')} ₫</h3>
                    </div>

                    <button>Thanh toán</button>
                </div>
            </div>
            <div className="cart-total-promocode">
                <p>Nếu bạn có mã giảm giá, hãy nhập nó vào đây</p>
                <div className="cart-total-promobox">
                    <input type="text" placeholder="Mã giảm giá" />
                    <button>Gửi </button>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;
