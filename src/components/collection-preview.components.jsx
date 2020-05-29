import React from 'react';
import CollectionItem from './collection-item.component';

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview mb-lg">
        <h1 className="heading-3 mb-md">{title}</h1>
        <div className="preview">
            {items
                .filter((item, index) => index < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </div>
    </div>
);

export default CollectionPreview;
