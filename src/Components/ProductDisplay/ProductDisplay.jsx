import React from 'react';
import PropTypes from 'prop-types';

import './ProductDisplay.scss';
import star_dull from '~/Assets/Images/star_dull_icon.png';
import star from '~/Assets/Images/star_icon.png';

ProductDisplay.propTypes = {
    product: PropTypes.object,
};

function ProductDisplay({ product }) {
    return (
        <div className="product-display">
            <div className="product-display-left">
                <div className="product-display-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-display-img-main">
                    <img src={product.image} alt="" />
                </div>
            </div>
            <div className="product-display-right">
                <h2 className="product-display-right-name">{product.name}</h2>
                <div className="product-display-right-rate">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star_dull} alt="" />
                    <p>(122)</p>
                </div>
                <div className="product-display-right-price">
                    <div className="product-display-right-price-new">{product.new_price.toLocaleString('vi-VN')} ₫</div>
                    <div className="product-display-right-price-old">
                        {product.old_price ? `${product.old_price.toLocaleString('vi-VN')} ₫` : ''}
                    </div>
                </div>
                <div className="product-display-right-description">
                    <p>
                        {product.description
                            ? product.description
                            : 'Một sản phẩm thời trang không chỉ đơn giản là một món đồ để mặc. Nó là kết quả của sự sáng tạo và công nghệ tiên tiến, được tạo ra để mang lại trải nghiệm tuyệt vời cho người mặc.'}
                    </p>
                </div>
                <div className="product-display-right-size">
                    <h2>Chọn kích cỡ</h2>
                    <div className="product-display-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button>Thêm vào giỏ hàng</button>
                <div className="product-display-right-category">
                    <p>
                        <span>Loại: </span>phụ nữ
                    </p>
                    <p>
                        <span>Thẻ: </span>hiện đại, hàng mới
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;
