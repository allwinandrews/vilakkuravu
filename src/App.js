import React, { Suspense, useContext } from "react";

import {
  Switch,
  Route,
  //  Redirect
} from "react-router-dom";

import "./App.css";

import Layout from "./components/UI/Layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import AuthContext from "./hooks-store/auth-context";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const CategoriesPage = React.lazy(() => import("./pages/CategoriesPage"));
const ProductDetailPage = React.lazy(() => import("./pages/ProductDetailPage"));
// const SignInPage = React.lazy(() => import("./pages/SignInPage"));
const SignUpPage = React.lazy(() => import("./pages/SignUpPage"));

const suspenseFallback = (
  <div className="centered">
    <LoadingSpinner />
  </div>
);

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Suspense fallback={suspenseFallback}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/category/:categoryName"
            component={CategoriesPage}
          />
          <Route
            exact
            path="/category/:categoryName/:productType/:productId"
            component={ProductDetailPage}
          />
          {/* <Route exact path="/sign-in" component={SignInPage} /> */}
          <Route exact path="/sign-up" component={SignUpPage} />
          {/* <Route path="*">
        <Redirect to="/" />
      </Route> */}
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
