// 该文件用于汇总所有的reducer为一个总的reducer
// import reducer
import countReducer from './reduces/counter_reducer'
import personReduce from './reduces/person'
import{combineReducers} from 'redux'

//汇总所有的reducer 变为一个总的reducer
const allReducer=combineReducers({
    he:countReducer,
    rens:personReduce
    
    })
    
export default allReducer