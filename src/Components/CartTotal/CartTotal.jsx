import React from 'react';
import './CartTotal.scss';

const CartTotal = () => {
    return (
        <div className="cart-total">
            <div className="cart-total-main">
                <div className="cart-total-main-container">
                    <h2>Tổng tiền giỏ hàng</h2>

                    <div className="cart-total-main-item">
                        <p>Tổng phụ</p>
                        <p>100.000 ₫</p>
                    </div>
                    <hr />
                    <div className="cart-total-main-item">
                        <p>Phí vận chuyển</p>
                        <p>Miễn phí</p>
                    </div>
                    <hr />
                    <div className="cart-total-main-item">
                        <h3>Tổng tiền</h3>
                        <h3>100.000 ₫</h3>
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
