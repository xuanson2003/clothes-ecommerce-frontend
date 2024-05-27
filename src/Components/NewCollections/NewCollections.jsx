import React, { useEffect, useState } from 'react';
import './NewCollections.scss';
import Item from '../Item/Item';
import request from '~/Utils/httpRequest';

const NewCollections = () => {
    const [newCollection, setNewCollection] = useState([]);

    useEffect(() => {
        request.get('newcollections').then((res) => {
            setNewCollection(res.data);
        });
    }, []);

    return (
        <div className="new-collections">
            <div className="container new-collections-container">
                <h2>Bộ sưu tập mới</h2>
                <hr />
                <div className="new-collections-list row">
                    {newCollection.map((item) => (
                        <Item key={item._id} data={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewCollections;
