// this file is to expose a store object, the App only has one store object

//import createStore in order to create store object
import{createStore,applyMiddleware} from 'redux'
//引入汇总之后的reducer
import reducer from './reduces'


//import redux-thunk , in order to support async action
import thunk from 'redux-thunk'

export default createStore(reducer,applyMiddleware(thunk))


