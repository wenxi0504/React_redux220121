import React, { Component } from 'react';
import Count from './containers/Count'// container Count
import store from './redux/store'
import Person from './containers/Person'//引入Person的容器组件

export default class App extends Component {
  render() {
    return (<div>
      {/* 给容器组件传递store */}
        <Count store={store}/>
        <hr/>
        <Person/>
    </div>)
  }
}
