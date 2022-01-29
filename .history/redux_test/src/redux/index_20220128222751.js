// 该文件用于汇总所有的reducer为一个总的reducer
// import reducer
import countReducer from './counter_reducer'
import personReduce from './person'
//引入combineReducer，用于汇总多个reducer
import{combineReducers} from 'redux'

//汇总所有的reducer 变为一个总的reducer
export default combineReducers({
    count:countReducer, //countReducer:counterReducer => counterReducer
    persons:personReduce //personReducer
    
    })
    
