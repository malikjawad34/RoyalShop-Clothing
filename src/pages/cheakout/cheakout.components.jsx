import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartItemTotal } from '../../redux/cart/cart.selector';
import CheckOutItem from '../../components/checkout/checkout-item.components';
import './cheakout.styles.scss';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.components';

const CheakOutPage = ({ cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Discription</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>            
            <div className='header-block'>
                <span>Remove</span>
            </div>                       
        </div>
        <div className='headerblock'>
            {
                cartItems.map(cartItem =>
                    <CheckOutItem key={cartItem.id} cartItem={cartItem} />)
            }
        </div>
        <div className='total'>
            <span>Total ${total}</span>
        </div>
        <div className='warning'>
            *please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - exp: 01/22 - cvv: 123
        </div>
        <StripeCheckoutButton price={total} />
        
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems, 
    total: selectCartItemTotal
})

export default connect(mapStateToProps)(CheakOutPage);