import React from 'react';
import './collections-overview.styles.scss';
import CollectionPreview from '../../preview-collection/collection-preview.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionForPreview} from '../../../redux/shop/shop.selector';
const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {collections.map(({id, ...collectionProps}) => (
            <CollectionPreview key={id} {...collectionProps}/>
        ))}
    </div>
);
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview,
});
export default connect(mapStateToProps, null)(CollectionsOverview);
