import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../redux/cart/cart.selectors';
import CheckoutItem from '../components/checkout-item.component';

const CheckoutPage = ({ cartItems, total }) => (
    <div className="checkout">
        <span className="heading-1 mb-lg">Your Cart: </span>
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem =>
            <CheckoutItem
                cartItem={cartItem}
                key={cartItem.id}
            />
        )}

        <div className="total mt-md-2">
            <span>Total: £{total}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);