import React from 'react';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className="cart-item mb-sm-2">
        <img src={imageUrl} alt={name} />
        <div className="item-details">
            <span className="name mb-sm">{name}</span>
            <span className="price">{quantity} x £{price}</span>
        </div>
    </div>
);

export default React.memo(CartItem);