import CountUI from '../../component/Count'
import store from '../../redux/store'
//import connect to connect UI component and redux
import{connect} from 'react-redux'
//引入action
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/counter_action'




//映射状态
//const mapStateToProps = state=>({count:state})

//映射操作状态的方法
// const mapDispatchToProps=dispatch =>(
//     {
//         jia:number=>dispatch(createIncrementAction(number)),
//         jian:number=>dispatch(createDecrementAction(number)),
//         jiaAsync:(number,time)=>dispatch(createIncrementAsyncAction(number,time))
//     }
    
// )






//use connect to create and export a container component for Count
// export default connect( 
//     mapStateToProps,
//     mapDispatchToProps
//     )(CountUI)

export default connect(
    state=>({count:state}),
    //mapDispatchToProps 的一般写法
    // dispatch =>(
        //     {
        //         jia:number=>dispatch(createIncrementAction(number)),
        //         jian:number=>dispatch(createDecrementAction(number)),
        //         jiaAsync:(number,time)=>dispatch(createIncrementAsyncAction(number,time))
        //     }
            
        // )
        //精简版
        {
          jia: createIncrementAction,
          jian:createDecrementAction,
          jiaAsync :createIncrementAsyncAction,

        }



)(CountUI)


