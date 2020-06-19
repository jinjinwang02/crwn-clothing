import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../redux/cart/cart.selectors';
import { toggleCartHidden } from '../redux/cart/cart.actions';
import CustomButton from './custom-button.component';
import CartItem from './cart-item.component';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length ?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                : <span className="text mg-auto">Your cart is empty</span>
            }
        </div>

        <CustomButton onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
