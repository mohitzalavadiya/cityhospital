import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { RootAuth } from './reducer/AuthReducer'
import { sagaAll } from './saga/AllSaga'

const sagaMiddleware = createSagaMiddleware()
const Middleware = [thunk, sagaMiddleware]
export const store = createStore(
  RootAuth,
  applyMiddleware(...Middleware)
)

sagaMiddleware.run(sagaAll)