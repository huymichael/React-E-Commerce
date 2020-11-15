import React, {useEffect} from 'react';
import './shop.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching, selectIsCollectionsLoaded} from '../../redux/shop/shop.selector';
import CollectionsOverview from '../../components/collections/collections-overview/collections-overview.component';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection.page';
import WithSpinner from '../../components/spinner/spinner.component';
import {fetchCollectionsStart} from '../../redux/shop/shop.action';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


const ShopPage = ({isCollectionFetching, isCollectionLoaded, match, fetchCollectionStart}) => {

    useEffect(() => {
        fetchCollectionStart();
    }, [fetchCollectionStart]);

    return (
        <React.Fragment>
            <div className='shop-page'>
                <Route exact path={`${match.path}`}
                       render={(props) => <CollectionOverviewWithSpinner
                           isLoading={isCollectionFetching} {...props}/>}/>
                <Route path={`${match.path}/:collectionId`}
                       render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded}{...props}/>}/>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);