import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart } from '../redux/cart/cart.actions';
import { addItem, removeItem } from '../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
    const { imageUrl, name, quantity, price } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="name">{name}</div>
            <div className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </div>
            <div className="price">£{price}</div>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))

});

export default connect(null, mapDispatchToProps)(CheckoutItem);