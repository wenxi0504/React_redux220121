/*
1.this file is used to create a reducer in order to service
count component. reducer is a function
2. reducer pure function will receive two parameters, one is prestate,
and action object
*/


import {INCREMENT,DECREMENT} from './constant'
//preState=initState is the default value of the paramet
const initState=0
export default function countReducer(preState=initState, action) {
    console.log(preState,action)
  if (preState === undefined) preState = 0;
  const { type, data } = action;
  switch (type) {
    case "INCREMENTt":
      return preState + data;
    case "DECREMENT":
      return preState - data;
    //初始化
    default:
      return preState;
  }
}
