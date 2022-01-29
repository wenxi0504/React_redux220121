// this file is used to create action object for Count component

import { INCREMENT,DECREMENT } from "../constant"
import store from '../store'


 export function increment(data){
return {type:INCREMENT,data}
}

//sync action, the value of the action is an object
export const decrement = data=>({type:DECREMENT,data})

// Async action , the value of action is a function. async action generally invoke sync action.
export const incrementAsync=(data,time) =>{ 
    return ()=>{
     setTimeout(()=>{
        store.dispatch(createIncrementAction(data))

     },time)
  } 
}

