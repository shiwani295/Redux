import { ADD_TO_CART, REMOVE_TO_CART } from "../Constants.js";
export const AddToCart = (data) => {
  console.log(data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};
export const RemoveToCart = () => {
  return {
    type: REMOVE_TO_CART,
  };
};
