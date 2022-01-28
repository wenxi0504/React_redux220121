import React, { Component } from 'react';
import {nanoid} from 'nanoid'
import { connect } from 'react-redux';
import{createAddPersonAction} from'../../redux/actions/person_action';
class Person extends Component {
    addPerson=()=>{
const name=this.nameNode.value
const age=this.ageNode.value
const personObj={id:nanoid(),name,age}
this.props.jiaYiRen(personObj)
this.nameNode.value='';
this.ageNode.value='';


    }
  render() {
    return <div>
        <h2>I am a person component</h2>
     <input ref={c=>this.nameNode=c}  type="text" placeholder="name?"></input>
     <input ref={c=>this.ageNode=c} placeholder="year?"></input>
     <button onClick={this.addPerson}>Add</button>
     <ul>
         {this.props.yiduiren.map((p)=>{
             return  <li key={p.id}>{p.name}--{p.age}</li>
         })}
     </ul>
    </div>;
  }
}

 export default connect(
    state=>({yoduiren:state.rens}),// 映射状态
    {jiaYiRen:createAddPersonAction}//隐射操作状态的方法
 )(Person)
