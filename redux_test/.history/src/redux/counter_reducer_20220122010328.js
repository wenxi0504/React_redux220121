/*
1.this file is used to create a reducer in order to service
count component. reducer is a function
2. reducer pure function will receive two parameters, one is prestate,
and action object
*/

//preState=initState is the default value of the parameter
const initState=0
function countReducer(preState=initState, action) {
  if (preState === undefined) preState = 0;
  const { type, data } = action;
  switch (type) {
    case "increment":
      return preState + data;
    case "decrement":
      return preState - data;
    //初始化
    default:
      return preState;
  }
}
