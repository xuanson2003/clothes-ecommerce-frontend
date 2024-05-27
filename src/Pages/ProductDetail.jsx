import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import './SCSS/ProductDetail.scss';
import Breadcrum from '~/Components/BreadScrum/Breadcrum';
import DescriptionBox from '~/Components/DescriptionBox/DescriptionBox';
import Popular from '~/Components/Popular/Popular';
import ProductDisplay from '~/Components/ProductDisplay/ProductDisplay';
import { ShopContext } from '~/Context/ShopContext';

const ProductDetail = () => {
    const { allProduct } = useContext(ShopContext);
    const { id } = useParams();
    const titles = {
        men: 'Thời trang nam phổ biến',
        women: 'Thời trang nữ phổ biến',
        kid: 'Thời trang trẻ em phổ biến',
    };
    const product = allProduct.find((item) => item._id === Number(id));
    const title = titles[product.category] || titles.men;

    return (
        <div className="product-detail">
            <div className="container">
                <Breadcrum product={product} />
                <ProductDisplay product={product} />
                <DescriptionBox />
                <Popular title={title} category={product.category} />
            </div>
        </div>
    );
};

export default ProductDetail;
