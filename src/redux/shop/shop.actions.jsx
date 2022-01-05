import updateCollectonType from './shop.types'

import { firestore, ConvertCollectionsSnapShotToMap } from '../../firebase/firebase.utils'

export const FetchCollectionStart = () => ({
    type: updateCollectonType.Fetch_Collection_Start
});

export const FetchCollectionSuccess = (collectionsMap) => ({
    type: updateCollectonType.Fetch_Collection_Success,
    payload: collectionsMap
});

export const FetchCollectionError = (errorMessage) => ({
    type: updateCollectonType.Fetch_Collection_Error,
    payload: errorMessage
});

export const FetchCollectionStartAsync = () => {
    return dispatch => {
        const CollectionRef = firestore.collection('collections');
        dispatch(FetchCollectionStart());

        CollectionRef.get().then(snapshot => {
            const collectionsMap = ConvertCollectionsSnapShotToMap(snapshot);
            dispatch(FetchCollectionSuccess(collectionsMap));
        }).catch(error => dispatch(FetchCollectionError(error.message)));
            
    }
}

