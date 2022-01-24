// import React, { Component } from 'react';

// export default class Count extends Component {
//     state={carName:'Benz'}

   

//     increment =()=>{
//         const{value}=this.selectNumber
//         this.props.jia(value*1)
       
        
//     }
//     decrement =()=>{
//         const{value}=this.selectNumber
//         this.props.jian(value*1)
        

//     }
//     incrementIfOdd =()=>{
//         const{value}=this.selectNumber
//         if(this.props.count %2 !==0){
//             this.props.jia(value*1,500)

//         }
       
//     }
//     incrementAsync =()=>{
//         const{value}=this.selectNumber
//         this.props.jiaAsync(value*1)
//         //setTimeout(()=>{
      
//     }
//   render() {
//     return <div>
//         console.log('UI组件接收到的props是'，this.props)
//         <h1>Result:xxxx </h1>
//         <select ref={c=>this.selectNumber=c}>
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//         </select>&nbsp;
//         <button onClick={this.increment}>+</button>&nbsp;
//         <button onClick={this.decrement}>-</button>&nbsp;
//         <button onClick={this.incrementIfOdd}>result add odd</button>&nbsp;
//         <button onClick={this.incrementAsync}>result add async</button>
//     </div>;
//   }
// }
