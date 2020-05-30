import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./routes/home";
import Menus from "./routes/menus";
import Order from "./routes/order";
import ShoppingCart from "./routes/shopping_cart";
import Registration from "./routes/registration";
import Login from "./routes/login";
import {
  HOME_PATH,
  MENUS_PATH,
  ORDER_PATH,
  SHOPPING_CART_PATH,
  REGISTRATION_PATH,
  LOGIN_PATH,
} from "./utils/path";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={HOME_PATH}>
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route path={MENUS_PATH}>
          <Layout>
            <Menus />
          </Layout>
        </Route>
        <Route path={ORDER_PATH}>
          <Layout>
            <Order />
          </Layout>
        </Route>
        <Route path={SHOPPING_CART_PATH}>
          <Layout>
            <ShoppingCart />
          </Layout>
        </Route>
        <Route path={REGISTRATION_PATH}>
          <Layout>
            <Registration />
          </Layout>
        </Route>
        <Route path={LOGIN_PATH}>
          <Layout>
            <Login />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
