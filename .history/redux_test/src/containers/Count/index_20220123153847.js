import CountUI from '../../component/Count'
import store from '../../redux/store'
//import connect to connect UI component and redux
import{connect} from 'react-redux'
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/counter_action'





// mapStateToProps函数的返回的是一个对象中：
// 返回对象的key就作为传递给UI组件prop的key，value作为传递给UI组件props的value-
//mapStateToProps 用于传递 redux 保存的状态
function mapStateToProps(state){
    // equals <CountUI n={900}/> return {n:900},key value
    // return {count:store.getState()} bc react-redux has pass the state,so
    return{count:state}
}

// mapDispatchProps函数的返回的是一个对象中：
// 返回对象的key就作为传递给UI组件prop的key，value作为传递给UI组件props的value-
//mapDispatchProp 用于传递操作状态的fangfa
function mapDispatchToProps(dispatch){
return {
    //通知redux执行加法
   // dispatch({type:'increment',data:number})
   jia:number=>dispatch(createIncrementAction(number)),
   jian:number=>dispatch(createDecrementAction(number)),
   jiaAsync:(number,time)=>dispatch(createIncrementAsyncAction(number))


}

}




//use connect to create and export a container component for Count
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)


