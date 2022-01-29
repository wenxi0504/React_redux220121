// this file is to expose a store object, the App only has one store object

//import createStore in order to create store object
import{createStore,applyMiddleware} from 'redux'
// import reducer
import countReducer from './reduces/counter_reducer'
//import redux-thunk , in order to support async action
import thunk from 'redux-thunk'


export default createStore(countReducer,applyMiddleware(thunk))


