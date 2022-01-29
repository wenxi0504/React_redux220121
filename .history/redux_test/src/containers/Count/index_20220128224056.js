import CountUI from '../../component/Count'
import store from '../../redux/store'
//import connect to connect UI component and redux
import{connect} from 'react-redux'
//引入action
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} 
from '../../redux/actions/counter_action'

import React, { Component } from 'react';


// define UI Component
class Count extends Component {
    state={carName:'Benz'}

   

    increment =()=>{
        const{value}=this.selectNumber
        this.props.jia(value*1)
       
        
    }
    decrement =()=>{
        const{value}=this.selectNumber
        this.props.jian(value*1)
        

    }
    incrementIfOdd =()=>{
        const{value}=this.selectNumber
        if(this.props.count %2 !==0){
            this.props.jia(value*1,500)

        }
       
    }
    incrementAsync =()=>{
        const{value}=this.selectNumber
        this.props.jiaAsync(value*1)
        //setTimeout(()=>{
      
    }
  render() {
    return <div>
        console.log('UI组件接收到的props是'，this.props)
        <h1>Result:{this.props.count},下方组件总人数为:{this.props.renshu} </h1>
        <select ref={c=>this.selectNumber=c}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>result add odd</button>&nbsp;
        <button onClick={this.incrementAsync}>result add async</button>
    </div>;
  }
}



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
    //state now is object after reduces has more reduces
    state=>({count:state.count,personCount:state.persons.length}),
    //mapDispatchToProps 的一般写法
    // dispatch =>(
        //     {
        //         jia:number=>dispatch(createIncrementAction(number)),
        //         jian:number=>dispatch(createDecrementAction(number)),
        //         jiaAsync:(number,time)=>dispatch(createIncrementAsyncAction(number,time))
        //     }
            
        // )
        //精简版 redux 可以自动分发dispatch
        {
          jia: createIncrementAction,
          jian:createDecrementAction,
          jiaAsync :createIncrementAsyncAction,

        }



)(Count)


