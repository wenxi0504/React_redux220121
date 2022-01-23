// this file is used to create action object for Count component

import { INCREMENT,DECREMENT } from "./constant"
import store from './store'


 export function createIncrementAction(data){
return {type:INCREMENT,data}
}

//sync action, the value of the action is an object
export const createDecrementAction = data=>({type:DECREMENT,data})

// Async action , the value of action is a function
export const createIncrementAsynctAction=(data,time) =>{
    return ()=>{
     setTimeout(()=>{
        store.dispatch(createIncrementAction(data))

     },time)
  } 
}

