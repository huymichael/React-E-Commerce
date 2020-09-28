import React from 'react';
import './shop.styles.scss';
import CollectionPreview from '../../components/preview-collection/collection-preview.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopCollections} from '../../redux/shop/shop.selector';
import CollectionsOverview from '../../components/collections/collections-overview/collections-overview.component';


const ShopPage = ({collections}) => {

    return (
        <React.Fragment>
            <div className='shop-page'>
                <CollectionsOverview/>
            </div>
        </React.Fragment>
    );

};
const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
});
export default connect(mapStateToProps, null)(ShopPage);