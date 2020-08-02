import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./routes/home";
import Menus from "./routes/menus";
import Order from "./routes/order";
import OrderSuccess from "./routes/order_success";
import OrderList from "./routes/order_list";
import OrderDetail from "./routes/order_detail";
import ShoppingCart from "./routes/shopping_cart";
import Registration from "./routes/registration";
import Profile from "./routes/profile";
import Login from "./routes/login";
import {
  HOME_PATH,
  MENUS_PATH,
  ORDER_PATH,
  ORDER_SUCCESS_PATH,
  ORDER_LIST_PATH,
  ORDER_DETAIL,
  SHOPPING_CART_PATH,
  REGISTRATION_PATH,
  PROFILE_PATH,
  LOGIN_PATH,
} from "./utils/path";

const app_routes = [
  {
    exact: true,
    path: HOME_PATH,
    component: Home,
  },
  {
    path: MENUS_PATH,
    component: Menus,
  },
  {
    path: ORDER_PATH,
    component: Order,
  },
  {
    path: ORDER_SUCCESS_PATH,
    component: OrderSuccess,
  },
  {
    path: ORDER_LIST_PATH,
    component: OrderList,
  },
  {
    path: ORDER_DETAIL,
    component: OrderDetail,
  },
  {
    path: SHOPPING_CART_PATH,
    component: ShoppingCart,
  },
  {
    path: REGISTRATION_PATH,
    component: Registration,
  },
  {
    path: PROFILE_PATH,
    component: Profile,
  },
  {
    path: LOGIN_PATH,
    component: Login,
  },
];

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          {app_routes.map((data, index) => (
            <Route key={index} {...data} />
          ))}
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
