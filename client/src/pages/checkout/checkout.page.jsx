import './checkout.styles.scss';
import React from 'react';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selector';
import {connect} from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems, total}) => {
    return (
        <React.Fragment>
            <div className='checkout-page'>
                <div className='checkout-header'>
                    <div className='header-block'>
                        <span>Product</span>
                    </div>
                    <div className='header-block'>
                        <span>Description</span>
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
                {
                    cartItems.map(item => <CheckoutItem cartItem={item} key={item.id}/>)
                }
                <div className='total'>
                    <span>TOTAL : ${total}</span>
                </div>
                <div className='test-warning'>
                    *Please use the following test credit card for payment
                    <br/>
                    4242 4242 4242 4242 - Epx: 12/24 - CVV: 123
                </div>
                <StripeCheckoutButton price={total}/>
            </div>
        </React.Fragment>
    );
};
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});
export default connect(mapStateToProps)(CheckoutPage);