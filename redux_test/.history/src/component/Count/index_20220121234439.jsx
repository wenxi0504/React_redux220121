import React, { Component } from 'react';

export default class Count extends Component {
    state={count:0}

    increment =()=>{
        const{value}=this.selectNumber
        const{count}=this.state
        this.setState({count:count+value*1})
    }
    decrement =()=>{}
    incrementIfOdd =()=>{}
    incrementAsync =()=>{}
  render() {
    return <div>
        <h1>Result:{this.state.count} </h1>
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
