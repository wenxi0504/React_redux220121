import React, { Component } from 'react';
import {nanoid} from 'nanoid'
import { connect } from 'react-redux';
class Person extends Component {
    addPerson=()=>{
const name=this.nameNode.value
const age=this.ageNode.value
const personObj={id:nanoid(),name,age}
console.log(personObj)


    }
  render() {
    return <div>
        <h2>I am a person component</h2>
     <input ref={c=>this.nameNode=c}  type="text" placeholder="name?"></input>
     <input ref={c=>this.ageNode=c} placeholder="year?"></input>
     <button onClick={this.addPerson}>Add</button>
    </div>;
  }
}

 export default connect(
    state=>({yoduiren:state.rens})// 映射状态

 )(Person)
