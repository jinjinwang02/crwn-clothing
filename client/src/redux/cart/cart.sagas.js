import { all, call, takeLatest, put } from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';
import { clearEntireCart } from './cart.actions';

export function* clearCartOnSignOut() {
    yield put(clearEntireCart());
};

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
};

export function* cartSagas() {
    yield (all([call(onSignOutSuccess)]))
};