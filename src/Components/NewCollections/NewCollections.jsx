import React from 'react';
import './NewCollections.scss';
import Item from '../Item/Item';
import new_collections from '~/Assets/Images/new_collections';

const NewCollections = () => {
    return (
        <div className="new-collections">
            <div className="container new-collections-container">
                <h2>Bộ sưu tập mới</h2>
                <hr />
                <div className="new-collections-list row">
                    {new_collections.map((item) => (
                        <Item key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewCollections;
