import {all,call, put, takeLatest} from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import {convertCollectionSnapshotToMap, firestore} from '../../firebase/firebase.util';
import {fetchCollectionsFailure, fetchCollectionsSuccess} from './shop.action';


export function* fetchCollectionAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(convertCollectionSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }


}

export function* fetchCollectionStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync);
}


export function* shopSagas(){
    yield all([
        call(fetchCollectionStart)
    ])
}