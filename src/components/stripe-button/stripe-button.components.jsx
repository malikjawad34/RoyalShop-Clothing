import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
    const stripeprice = price * 100;
    const publishableKey = 'pk_test_51IdYbqDd0MjXMj2QKOOuZdQbN3a95mjYSVCydGmoNItZkPmCHBrCtPDwQ9U24nY4tGMLOgHzp05M9rQYFTzgMb5U007kfKU2Tc';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label=' Pay Now'
            name='Royal Shop Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={stripeprice}
            panelLabel='Pay Now'  
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;  