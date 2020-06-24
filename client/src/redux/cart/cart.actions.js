import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM_TO_CART,
    payload: item
});

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item
});

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLAER_ITEM_FROM_CART,
    payload: item
});

export const clearEntireCart = () => ({
    type: CartActionTypes.CLEAR_ENTIRE_CART
});

export const updateCartInFirebase = () => ({
    type: CartActionTypes.UPDATE_CART_IN_FIREBASE
});

export const setCartFromFirebase = cartItems => ({
    type: CartActionTypes.SET_CART_FROM_FIREBASE,
    payload: cartItems
});