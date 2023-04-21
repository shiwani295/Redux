import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../src/service/reducers/index";

//
const root = ReactDOM.createRoot(document.getElementById("root"));
const Store = createStore(rootReducer);

//console.warn(Store);
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//1 crate store
// 2 when you create store go home.js
