import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ShopContext } from '~/Context/ShopContext';
import './ProductDisplay.scss';
import star_dull from '~/Assets/Images/star_dull_icon.png';
import star from '~/Assets/Images/star_icon.png';
import storage from '~/Utils/storage';
import error_img from '~/Assets/Images/error_img.png';

function ProductDisplay({ product }) {
    const { addToCart } = useContext(ShopContext);
    const imgSrc = product.image ? product.image : error_img;
    const categoryLst = {
        men: 'Nam',
        women: 'Nữ',
        kid: 'Trẻ em',
    };

    return (
        <div className="product-display">
            <div className="product-display-left">
                <div className="product-display-img-list">
                    <img src={imgSrc} alt="" />
                    <img src={imgSrc} alt="" />
                    <img src={imgSrc} alt="" />
                    <img src={imgSrc} alt="" />
                </div>
                <div className="product-display-img-main">
                    <img src={imgSrc} alt="" />
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
                <button
                    onClick={() => {
                        if (!storage.get()) {
                            alert('Vui lòng hãy đăng nhập!');
                            return;
                        }
                        addToCart(product._id);
                    }}
                >
                    Thêm vào giỏ hàng
                </button>
                <div className="product-display-right-category">
                    <p>
                        <span>Loại: </span>
                        {categoryLst[product.category]}
                    </p>
                    <p>
                        <span>Thẻ: </span>hiện đại, hàng mới
                    </p>
                </div>
            </div>
        </div>
    );
}

ProductDisplay.propTypes = {
    product: PropTypes.object,
};

export default ProductDisplay;
