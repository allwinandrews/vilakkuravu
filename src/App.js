import {
  BrowserRouter,
  Switch,
  Route,
  //  Redirect
} from "react-router-dom";

import "./App.css";

import Layout from "./components/UI/Layout/Layout";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/category/:categoryName" exact>
            <CategoriesPage />
          </Route>
          <Route path="/category/:categoryName/:productType/:productId" exact>
            <ProductDetailPage />
          </Route>
          {/* <Route path="*">
            <Redirect to="/" />
          </Route> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
