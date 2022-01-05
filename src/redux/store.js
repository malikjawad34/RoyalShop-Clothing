import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk'
import rootReducer from './root-reducer';


//import {fetchCollectionsStart} from './shop/shop.sagas'
//import createSagaMiddleware from 'redux-saga'
// const sagaMiddleware = createSagaMiddleware();

// const middlewares = [sagaMiddleware];


const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = 
    createStore(rootReducer, applyMiddleware(...middlewares));

//sagaMiddleware.run(fetchCollectionsStart);   

export const persistor = persistStore(store);    

