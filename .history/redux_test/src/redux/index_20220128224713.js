// 该文件用于汇总所有的reducer为一个总的reducer
// import reducer
import count from './counter_reducer'
import person from './person'
//引入combineReducer，用于汇总多个reducer
import{combineReducers} from 'redux'

//汇总所有的reducer 变为一个总的reducer
export default combineReducers({
    //count:count, 
    count,
    //persons:person 
    person

    })
    
