/*
1.this file is used to create a reducer in order to service
count component. reducer is a function
2. reducer function will receive two parameters, one is prestate,
and action object
*/

function countReducer(preState, action) {
  const { type, data } = action;
  switch (type) {
    case "increment":
      return preState + data;
    case "decrement":
      return preState - data;
    default:
      break;
  }
}
