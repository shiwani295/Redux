//create reducer which perform action || action send data to reducer
const initialState = {
  cartdata: [],
};
export default function cartreducerItem(state = [], action) {
  //for the multile value we assign array in initial value
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(action);
      //return also array
      return [...state, { cartdata: action.data }];
      break;
    default:
      return state;
  }
}

//1 this reducer save in root reducer index.js
//2 after save go for store in homecomtainer where you can create connect methods
