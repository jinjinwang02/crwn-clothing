import React from 'react';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div
        className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div
            style={{ backgroundImage: `url(${imageUrl})` }}
            className="bg-img" /
        >
        <div className="content">
            <h1 className="heading-2 mb-sm">{title}</h1>
            <span className="text">SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);