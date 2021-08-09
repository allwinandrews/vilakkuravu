import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/bootstrap.css";
import "./assets/css/ui.css";
import "./assets/css/responsive.css";
import "./assets/css/all.min.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import configureProductsStore from "./hooks-store/popular-products-store";

configureProductsStore();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
