import React from 'react';
import './collection.styles.scss';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collections/collection-item/collection-item.component';

const CollectionPage = ({collection}) => {
    const {title, items} = collection;

    return (
        <React.Fragment>
            <div className='collection-page'>
                <h2 className='title'>{title}</h2>
                <div className='items'>
                    {
                        items.map(item => <CollectionItem key={item.id} item={item}/>)
                    }
                </div>
            </div>
        </React.Fragment>
    );
};
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps, null)(CollectionPage);