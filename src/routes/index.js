import { lazy } from "react";
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

const Home = lazy(() => import("./home"));
const Menus = lazy(() => import("./menus"));
const Order = lazy(() => import("./order"));
const OrderSuccess = lazy(() => import("./order_success"));
const OrderList = lazy(() => import("./order_list"));
const OrderDetail = lazy(() => import("./order_detail"));
const ShoppingCart = lazy(() => import("./shopping_cart"));
const Registration = lazy(() => import("./registration"));
const Profile = lazy(() => import("./profile"));
const Login = lazy(() => import("./login"));

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
    path: SHOPPING_CART_PATH,
    component: ShoppingCart,
  },
  {
    path: REGISTRATION_PATH,
    component: Registration,
  },
  {
    path: LOGIN_PATH,
    component: Login,
  },
];

const protected_routes = [
  {
    path: PROFILE_PATH,
    component: Profile,
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
];

export { app_routes, protected_routes };
