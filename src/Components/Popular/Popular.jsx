import React from 'react';
import './Popular.scss';
import data from '~/Assets/Images/data';
import Item from '../Item/Item';

const Popular = () => {
    return (
        <div className="popular">
            <div className="container popular-container">
                <h2>Thời trang nữ phổ biến</h2>
                <hr />
                <div className="popular-list row">
                    {data.map((item) => (
                        <Item key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Popular;
