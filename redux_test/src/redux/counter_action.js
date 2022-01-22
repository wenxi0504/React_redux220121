// this file is used to create action object for Count component

import { INCREMENT,DECREMENT } from "./constant"


 export function createIncrementAtion(data){
return {type:'INCREMENT',data}
}


export const createDecrementAction = data=>({type:'DECREMENT ',data})


   
