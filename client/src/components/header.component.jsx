import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/crown.svg';
import { connect } from 'react-redux';
import CartIcon from './cart-icon.component';
import CartDropdown from './cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/user.selectors';
import { selectCartHidden } from '../redux/cart/cart.selectors';
import { signOutStart } from '../redux/user/user.actions';

const Header = ({ currentUser, hidden, signOutStart }) => (
    <div className="header mb-sm">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="navbar">
            <Link className="nav" to="/shop">SHOP COLLECTIONS</Link>
            <Link className="nav" to="/shop">CONTACT</Link>
            {currentUser ?
                <div className="nav" onClick={signOutStart} >SIGN OUT</div> :
                <Link className="nav" to="/authenticate">SIGN IN</Link>}
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);