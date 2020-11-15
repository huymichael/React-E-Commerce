import './stripe-button.styles.scss';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 1000;
    const publishableKey = 'pk_test_51HZCKGAsLj5Pc0I2nC09qtt8KqyXVgblElVEm6QVuyteeQZrUW2PXOu1pXfMvDoeXPFIY4oe8xf6gjcYn51zN3FO00amtQuBiP';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(response => {
            alert('payment successful');

        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert('There was an issue with your payment. Please check it again');
        });
    };

    return (
        <StripeCheckout
            label='Pay now'
            name='Michael Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}/>
    );
};
export default StripeCheckoutButton;