import React from 'react';
import PropTypes from 'prop-types';

import './Breadcrum.scss';
import arrow_icon from '~/Assets/Images/breadcrum_arrow.png';

const Breadcrum = ({ product }) => {
    const categorys = {
        men: 'Nam',
        women: 'Nữ',
        kid: 'Trẻ em',
    };
    const category = categorys[product.category] || 'Nam';
    return (
        <div className="breadcrum">
            Trang chủ <img src={arrow_icon} alt="" /> {category} <img src={arrow_icon} alt="" /> {product.name}
        </div>
    );
};

Breadcrum.propTypes = {
    product: PropTypes.object,
};

export default Breadcrum;
