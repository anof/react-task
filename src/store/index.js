import { createStore, applyMiddleware, compose } from 'redux';
import appReducer from './reducers'
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware()

const storeFactory = (initialState={})=>{
    return compose((applyMiddleware(sagaMiddleware))(createStore)(appReducer,initialState))
}


export default storeFactory;