import {  takeLatest } from 'redux-saga/effects';
import updateCollectonType from './shop.types';

//import { FetchCollectionSuccess, FetchCollectionError } from './shop.actions';
//import { firestore, ConvertCollectionsSnapShotToMap } from '../../firebase/firebase.utils';
//, call, puttakeEvery,

export function * fetchCollectionsAsync() {
    // try{
    //     const CollectionRef = firestore.collection('collections');
    //     const snapshot = yield CollectionRef.get();
    //     const collectionsMap = yield call( ConvertCollectionsSnapShotToMap, snapshot );
    //     yield put(FetchCollectionSuccess(collectionsMap));
    // } catch(error) {
    //     yield put(FetchCollectionError(error.message));
    // }
    yield console.log("i am fired");

} 

// export function * fetchCollectionsStart() {
//     yield takeEvery(
//         updateCollectonType.Fetch_Collection_Start,
//         fetchCollectionsAsync
//     )
// }


export function * fetchCollectionsStart() {
    yield takeLatest(
        updateCollectonType.Fetch_Collection_Start,
        fetchCollectionsAsync
    )
}