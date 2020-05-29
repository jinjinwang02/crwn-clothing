import React from 'react';
import CustomButton from './custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className="collection-item">
            <div
                className="image mb-sm"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="collection-footer mb-sm-2 mt-sm">
                <div className="name text">{name}</div>
                <div className="price text">£{price}</div>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>Add To Cart</CustomButton>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);