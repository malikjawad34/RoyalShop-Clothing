import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import WithSpinner from '../withspinner/with-spinner.component';
import { selectIsFetchingCollection } from '../../redux/shop/shop.selector';
import CollectionOverview from './collection-overview.components';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsFetchingCollection
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;