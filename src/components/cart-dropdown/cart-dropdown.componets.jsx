import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.components';
import CartItem from '../cart-item/card-item.components';
import { selectCartItems } from '../../redux/cart/cart.selector';
import toggleCarthidden  from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';


const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >
            {
                cartItems.length ?
                cartItems.map( cartItem =>(
                    <CartItem key={cartItem.id } item={cartItem} />))
                :
                <span className='empty-message'>Your Cart is Empty</span>
            }
        </div>
        <CustomButton onClick={() =>
             {
                 history.push('/cheakout');
                 dispatch(toggleCarthidden())
            }} >
                 go to cheakout</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropdown));