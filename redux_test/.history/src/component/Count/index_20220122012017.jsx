import React, { Component } from 'react';
// import store in order to get the state from redux
import store from '../../redux/store'
export default class Count extends Component {
    state={carName:'Benz'}

    componentDidMount(){
        //listen the state from redux, if the state is changed, invoke render
        store.subscribe(()=>{
            //invoke render
            this.setState({})
        })
    }

    increment =()=>{
        const{value}=this.selectNumber
        store.dispatch({type:'increment',data:value*1})
        
    }
    decrement =()=>{
        const{value}=this.selectNumber
        const{count}=this.state
        this.setState({count:count-value*1})

    }
    incrementIfOdd =()=>{
        const{value}=this.selectNumber
        const{count}=this.state
        if(count%2 !==0){
        this.setState({count:count+value*1})}

    }
    incrementAsync =()=>{
        const{value}=this.selectNumber
        const{count}=this.state
        setTimeout(()=>{
            this.setState({count:count+value*1})},500)
    }
  render() {
    return <div>
        <h1>Result:{store.getState()} </h1>
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
