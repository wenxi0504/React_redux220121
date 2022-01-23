import CountUI from '../../component/Count'
import store from '../../redux/store'
//import connect to connect UI component and redux
import{connect} from 'react-redux'





//a函数的返回的对象中的key就作为传递给UI组件prop的key，value作为传递给UI组件props的value-状态
function a(){
    // equals <CountUI n={900}/> return {n:900},key value
return {count:store.getState()} 
}

//b函数返回对象中的key作为传递给UI组件Props的key，value就作为传递给UI组件props的value——操作方法
function b(){
return {jia:()=>{console.log(1)}}

}




//use connect to create and export a container component for Count
export default connect(a,b)(CountUI)


