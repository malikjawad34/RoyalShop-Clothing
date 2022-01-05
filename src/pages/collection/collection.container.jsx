import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { compose } from 'redux'

import WithSpinner from '../../components/withspinner/with-spinner.component'
import { selectIsLoadedCollection } from '../../redux/shop/shop.selector'
import CollectionPage from './collection.components'

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsLoadedCollection(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
