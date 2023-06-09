import { connect } from "react-redux";
import Home from "../components/Home";
import { AddToCart, RemoveToCart } from "../service/actions/action";

//this is call when you already pass the data in store and now you want to use that data
const mapStateToProps = (state) => ({
  DataCart: state.cartreducerItem, // get data come from reducer cartreducerItem
});

//thhis call when you want to pass data into store
const mapDispatchToProps = (dispatch) => ({
  AddToCartHandler: (data) => dispatch(AddToCart(data)),
  RemoveToCartHandler: (data) => dispatch(RemoveToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// 2 then we go main index.js here we create store ,provider which flow the data in whole application
