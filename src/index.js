import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/bootstrap.css";
import "./assets/css/ui.css";
import "./assets/css/responsive.css";
import "./assets/css/all.min.css";
import "./assets/fonts/material-icon/css/material-design-iconic-font.min.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import configureProductsStore from "./hooks-store/popular-products-store";
import { AuthContextProvider } from "./hooks-store/auth-context";

configureProductsStore();

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
