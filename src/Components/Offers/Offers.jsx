import React from 'react';
import './Offers.scss';
import exclusive_image from '~/Assets/Images/exclusive_image.png';

const Offers = () => {
    return (
        <div className="offers">
            <div className="container offers-container">
                <div className="offers-container-left">
                    <h2>Ưu đãi</h2>
                    <h2>dành riêng cho bạn</h2>
                    <p>Chỉ dành cho mặt hàng bán chạy nhất</p>
                    <button>Kiểm tra ngay</button>
                </div>
                <div className="offers-container-right">
                    <img src={exclusive_image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Offers;
