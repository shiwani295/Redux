//create reducer which perform action || action send data to reducer
const initialState = {
  cartdata: [],
};
export default function cartreducerItem(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cartdata: action.data,
      };
      break;
    default:
      return state;
  }
}

//this reducer save in root reducer index.js
