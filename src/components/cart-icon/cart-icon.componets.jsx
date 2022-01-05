import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import toggleCarthidden from '../../redux/cart/cart.actions';
import { selectCartItemCount } from '../../redux/cart/cart.selector';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCarthidden, CountItem }) => (
    <div className='cart-icon' onClick={toggleCarthidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{CountItem}</span>
    </div>
)

const mapStateToProps = createStructuredSelector({
    CountItem : selectCartItemCount
});

const mapDispatchToProps = dispatch => ({
    toggleCarthidden: () => dispatch(toggleCarthidden(false))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);