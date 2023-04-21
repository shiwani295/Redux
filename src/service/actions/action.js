import { ADD_TO_CART } from "../Constants.js";
export const ADD_TO_Cart = (data) => {
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

// export const REMOVE_TO_Cart = (id) => {
//   return {
//     type: "REMOVE_TO_Cart",
//     id: id,
//   };
// };
