// this is root reducer
//call combine reducer from redux
import { combineReducers } from "redux";
////import the inside reducer function cartreducerItem in root reducer
import cartreducerItem from "../reducers/reducer";
//here we will combine all the reducers
export default combineReducers({
  cartreducerItem,
});
