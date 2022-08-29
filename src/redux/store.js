import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { RootAuth } from './reducer/AuthReducer'
import { sagaAll } from './saga/AllSaga'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist : ["auth"]
}

const sagaMiddleware = createSagaMiddleware()
const Middleware = [thunk, sagaMiddleware]
const persistedReducer = persistReducer(persistConfig, RootAuth)

export const store = createStore(
  persistedReducer,
  applyMiddleware(...Middleware)
)
export let persistor = persistStore(store);
sagaMiddleware.run(sagaAll)