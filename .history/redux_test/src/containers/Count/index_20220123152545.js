import CountUI from '../../component/Count'
import store from '../../redux/store'
//import connect to connect UI component and redux
import{connect} from 'react-redux'
import {createIncrementAction} from '../../redux/counter_action'





//a函数的返回的对象中的key就作为传递给UI组件prop的key，value作为传递给UI组件props的value-redux 保存的状态
function mapStateToProps(state){
    // equals <CountUI n={900}/> return {n:900},key value
    // return {count:store.getState()} bc react-redux has pass the state,so
    return{count:state}
}

//b函数返回对象中的key作为传递给UI组件Props的key，value就作为传递给UI组件props的value——操作方法
function b(dispatch){
return {jia:(number)=>{
    //通知redux执行加法
   // dispatch({type:'increment',data:number})
   dispatch({createIncrementAction})
}}

}




//use connect to create and export a container component for Count
export default connect(mapStateToProps,b)(CountUI)

