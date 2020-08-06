import './checkout-item.styles.scss';
import React from 'react';

const CheckoutItem = ({cartItem: {name, imageUrl, price, quantity}}) => {
    return (
        <React.Fragment>
            <div className='checkout-item'>
                <div className='image-container'>
                    <img src={imageUrl} alt="item"/>
                </div>
                <span className='name'>{name}</span>
                <span className='quantity'>{quantity}</span>
                <span className='price'>{price}</span>
                <div className='remove-button'>
                    &#10005;
                </div>
            </div>
        </React.Fragment>

    );

};
export default CheckoutItem;