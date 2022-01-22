// this file is to expose a store object, the App only has one store object

//import createStore in order to create store object
import{createStore} from 'redux'
// import reducer
import countReducer from './counter_reducer'



export default createStore(countReducer)

