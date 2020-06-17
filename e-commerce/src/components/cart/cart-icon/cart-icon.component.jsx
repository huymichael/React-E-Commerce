import React from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../../assets/images/icons/cart.svg';
import {toggleCart} from '../../../redux/cart/cart.action';
import {connect} from 'react-redux';
import {selectCartItemsCount} from '../../../redux/cart/cart.selector';

const CartIcon = ({toggleCart, itemCount}) => (
    <div className='cart-icon' onClick={toggleCart}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);


const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
});

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

