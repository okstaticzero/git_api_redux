import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer.js'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import mySaga from '../sagas'
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

let store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(mySaga)

export default store;