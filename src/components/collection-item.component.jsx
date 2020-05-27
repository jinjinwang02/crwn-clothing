import React from 'react';

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className="collection-item">
        <div
            className="image mb-sm"
            style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="collection-footer mb-sm-2">
            <div className="name text">{name}</div>
            <div className="price text">{price}</div>
        </div>
    </div>
);

export default CollectionItem;