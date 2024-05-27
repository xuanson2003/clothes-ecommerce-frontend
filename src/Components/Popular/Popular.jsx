import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './Popular.scss';
import Item from '../Item/Item';
import request from '~/Utils/httpRequest';

const Popular = ({ title, category }) => {
    const [popularProdcut, setPopularProducts] = useState([]);

    useEffect(() => {
        request({
            method: 'POST',
            url: `popular/${category}`,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            data: {
                category: category,
            },
        }).then((res) => {
            setPopularProducts(res.data);
        });
    }, [category]);

    return (
        <div className="popular">
            <div className="container popular-container">
                <h2>{title}</h2>
                <hr />
                <div className="popular-list row">
                    {popularProdcut.map((item) => (
                        <Item key={item._id} data={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

Popular.propTypes = {
    title: PropTypes.string,
    category: PropTypes.string,
};

export default Popular;
