import CountUI from '../../component/Count'
import store from '../../redux/store'
//import connect to connect UI component and redux
import{connect} from 'react-redux'
//引入action
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/counter_action'




//映射状态
function mapStateToProps(state){
    // equals <CountUI n={900}/> return {n:900},key value
    // return {count:store.getState()} bc react-redux has pass the state,so
    return{count:state}
}

//映射操作状态的方法
function mapDispatchToProps(dispatch){
return {
    //通知redux执行加法
   // dispatch({type:'increment',data:number})
   jia:number=>dispatch(createIncrementAction(number)),
   jian:number=>dispatch(createDecrementAction(number)),
   jiaAsync:(number,time)=>dispatch(createIncrementAsyncAction(number,time))


}

}




//use connect to create and export a container component for Count
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)


