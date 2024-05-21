import React from 'react';
import { useParams } from 'react-router-dom';
import all_product from '~/Assets/Images/all_product';
import Breadcrum from '~/Components/BreadScrum/Breadcrum';
import ProductDisplay from '~/Components/ProductDisplay/ProductDisplay';

const ProductDetail = () => {
    const { id } = useParams();
    const product = all_product.find((item) => item.id === Number(id));
    return (
        <div className="product-detail">
            <div className="container">
                <Breadcrum product={product} />
                <ProductDisplay product={product} />
            </div>
        </div>
    );
};

export default ProductDetail;
