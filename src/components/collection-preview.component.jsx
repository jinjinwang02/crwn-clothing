import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from './collection-item.component';

const CollectionPreview = ({ items, title, routeName, history, match }) => (
    <div className="collection-preview mb-lg">
        <h1 className="heading-3 mb-md">{title}</h1>
        <div className="preview">
            {items
                .filter((item, index) => index < 4)
                .map(item =>
                    <CollectionItem key={item.id} item={item} />
                )}
        </div>
        <div className="collection-button mt-sm"
            onClick={() => history.push(`${match.url}/${routeName}`)}
        >
            See All
        </div>
    </div>
);

export default withRouter(CollectionPreview);
