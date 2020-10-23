import React from 'react';
import './shop.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching, selectIsCollectionsLoaded} from '../../redux/shop/shop.selector';
import CollectionsOverview from '../../components/collections/collections-overview/collections-overview.component';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection.page';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.action';
import WithSpinner from '../../components/spinner/spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {
    UNSAFE_componentWillMount() {

    }

    componentDidMount() {
        const {fetchCollectionStartAsync} = this.props;
        fetchCollectionStartAsync();

    }

    render() {
        const {match, isCollectionFetching,isCollectionLoaded} = this.props;
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
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded : selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);