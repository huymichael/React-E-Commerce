import React from 'react';
import './shop.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopCollections} from '../../redux/shop/shop.selector';
import CollectionsOverview from '../../components/collections/collections-overview/collections-overview.component';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection.page';
import {convertCollectionSnapshotToMap, firestore} from '../../firebase/firebase.util';
import {updateShopCollections} from '../../redux/shop/shop.action';


class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {updateShopCollections} = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionSnapshotToMap(snapshot);
            updateShopCollections(collectionMap);
        });
    }

    render() {
        const {match} = this.props;
        return (
            <React.Fragment>
                <div className='shop-page'>
                    <Route exact path={`${match.path}`} component={CollectionsOverview}/>
                    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
});

const mapDispatchToProps = dispatch => ({
    updateShopCollections: collectionsMap => dispatch(updateShopCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);