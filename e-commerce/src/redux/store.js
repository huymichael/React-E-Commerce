import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSagas from './root.sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default {store, persistor};

sagaMiddleware.run(rootSagas);