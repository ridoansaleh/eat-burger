import Home from "./home";
import Menus from "./menus";
import Order from "./order";
import OrderSuccess from "./order_success";
import OrderList from "./order_list";
import OrderDetail from "./order_detail";
import ShoppingCart from "./shopping_cart";
import Registration from "./registration";
import Profile from "./profile";
import Login from "./login";
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
} from "../constant/path";

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

export default app_routes;
