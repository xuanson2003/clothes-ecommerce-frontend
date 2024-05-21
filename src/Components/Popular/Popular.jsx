import React from 'react';
import PropTypes from 'prop-types';

import './Popular.scss';
import Item from '../Item/Item';
import data from '~/Assets/Images/all_product';

const Popular = ({ title, category }) => {
    return (
        <div className="popular">
            <div className="container popular-container">
                <h2>{title}</h2>
                <hr />
                <div className="popular-list row">
                    {data
                        .filter((item) => item.category === category)
                        .slice(-5, -1)
                        .map((item) => (
                            <Item key={item.id} data={item} />
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
