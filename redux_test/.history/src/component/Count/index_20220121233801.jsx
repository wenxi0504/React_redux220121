import React, { Component } from 'react';

export default class Count extends Component {
  render() {
    return <div>
        <h1>Result:0 </h1>
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
