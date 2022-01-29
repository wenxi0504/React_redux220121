// this file is to expose a store object, the App only has one store object

//import createStore in order to create store object
import{createStore,applyMiddleware,combineReducers} from 'redux'
// import reducer
import countReducer from './reduces/counter_reducer'
import personReduce from './reduces/person'

//import redux-thunk , in order to support async action
import thunk from 'redux-thunk'
//汇总所有的reducer 变为一个总的reducer
const allReducer=combineReducers({
he:countReducer,
rens:personReduce



})

export default createStore(allReducer,applyMiddleware(thunk))


