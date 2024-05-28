import React from 'react';
import { Link } from 'react-router-dom';
import './Item.scss';
import PropTypes from 'prop-types';
import error_img from '~/Assets/Images/error_img.png';

Item.propTypes = {
    data: PropTypes.object,
};

function Item({ data }) {
    return (
        <div className="item col-lg-3 col-md-4 col-6 ">
            <div className="item-container">
                <Link to={`/product/${data._id}`} className="item-img" onClick={window.scrollTo(0, 0)}>
                    <img src={data.image ? data.image : error_img} alt="" />
                </Link>
                <div className="item-content">
                    <h3 className="item-content-name">{data.name}</h3>
                    <div className="item-content-price">
                        <p className="item-content-price-new">{data.new_price.toLocaleString('vi-VN')} ₫</p>
                        <p className="item-content-price-old">
                            {data.old_price ? `${data.old_price.toLocaleString('vi-VN')} ₫` : ''}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
