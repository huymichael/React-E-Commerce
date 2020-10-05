import React from 'react';
import './collection.styles.scss';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selector';

const CollectionPage = ({collection}) => {


    return (
        <React.Fragment>
            <div className='collection-page'>
                <h2>collection page</h2>
            </div>
        </React.Fragment>
    );
};
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps, null)(CollectionPage);