import CountUI from '../../component/Count'
//import store from '../../redux/store'
//import connect to connect UI component and redux
import{connect} from 'react-redux'



//a函数的返回的对象中的key就作为传递给UI组件prop的key，value作为传递给UI组件props的value
function a(){
    // equals <CountUI n={900}/>
return {n:900} 
}

function b(){


}




//use connect to create and export a container component for Count
export default connect(a,b)(CountUI)


