import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../../components/preview-collection/preview-collection.componenets';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector'; 

import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
    <div className='collection-overview'>{
        collections.map(({id, ...othercollectionprops}) => (
            <CollectionPreview key={id} {...othercollectionprops} />
        ))
        }      
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview);

