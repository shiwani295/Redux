import { connect } from "react-redux";

import Header from "../components/Header";

//this is call when you already pass the data in store and now you want to use that data
const mapStateToProps = (state) => ({
  DataCart: state.cartreducerItem, // get data come from reducer cartreducerItem
});

//thhis call when you want to pass data into store
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
