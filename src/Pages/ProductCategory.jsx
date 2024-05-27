import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ShopContext } from '~/Context/ShopContext';
import Item from '~/Components/Item/Item';
import './SCSS/ProductCategory.scss';
import banner_men from '~/Assets/Images/banner_mens.png';
import banner_women from '~/Assets/Images/banner_women.png';
import banner_kid from '~/Assets/Images/banner_kids.png';

const ProductCategory = ({ category }) => {
    const { allProduct } = useContext(ShopContext);
    const categoryImage = {
        men: banner_men,
        women: banner_women,
        kid: banner_kid,
    };

    const srcImg = categoryImage[category] || banner_men;

    return (
        <div className="product-category">
            <div className="container product-category-container">
                <div className="product-category-container-banner">
                    <img src={srcImg} alt="" />
                </div>

                <div className="product-category-container-indexSort">
                    <p>
                        <span>{allProduct.filter((item) => item.category === category).length} </span>
                        sản phẩm
                    </p>
                    <div className="product-category-container-indexSort-sort">
                        <select name="sort" id="">
                            <option value="0">Sắp xếp theo</option>
                            <option value="0">Giá tăng dần</option>
                            <option value="0">Giá giảm dần</option>
                        </select>
                    </div>
                </div>

                <div className="product-category-container-products row">
                    {allProduct
                        .filter((item) => item.category === category)
                        .map((item) => (
                            <Item key={item._id} data={item} />
                        ))}
                </div>

                <div className="product-category-container-loadmore">
                    <button>Xem thêm</button>
                </div>
            </div>
        </div>
    );
};

ProductCategory.propTypes = {
    category: PropTypes.string,
};

export default ProductCategory;
