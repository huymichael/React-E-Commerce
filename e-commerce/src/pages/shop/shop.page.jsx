import React from 'react';
import './shop.styles.scss';
import CollectionPreview from '../../components/preview-collection/collection-preview.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopCollections} from '../../redux/shop/shop.selector';


const ShopPage = ({collections}) => {

    return (
        <React.Fragment>
            <div className='shop-page'>
                {collections.map(({id, ...collectionProps}) => (
                    <CollectionPreview key={id} {...collectionProps}/>
                ))}
            </div>
        </React.Fragment>
    );

};
const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
});
export default connect(mapStateToProps, null)(ShopPage);