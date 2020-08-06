import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {addItem} from '../../redux/cart/cart.action';
import {connect} from 'react-redux';

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
        <React.Fragment>
            <div className='collection-item'>
                <div className='image' style={{backgroundImage: `url(${imageUrl})`}}/>
                <div className='collection-footer'>
                    <span className='name'>{name}</span>
                    <span className='price'>{price}</span>
                </div>
                <CustomButton inverted
                              onClick={() => addItem(item)}>ADD TO CART</CustomButton>
            </div>
        </React.Fragment>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);