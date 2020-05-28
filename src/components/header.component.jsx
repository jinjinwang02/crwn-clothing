import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase.utils';
import { ReactComponent as Logo } from '../assets/crown.svg';
import { connect } from 'react-redux';
import CartIcon from './cart-icon.component';
import CartDropdown from './cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
    <div className="header mb-sm">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="navbar">
            <Link className="nav" to="/shop">SHOP</Link>
            <Link className="nav" to="/shop">CONTACT</Link>
            {currentUser ?
                <div className="nav" onClick={() => auth.signOut()} >SIGN OUT</div> :
                <Link className="nav" to="/authenticate">SIGN IN</Link>}
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);