import { lazy } from "react";
import {
  HOME_PATH,
  MENUS_PATH,
  ORDER_PATH,
  ORDER_SUCCESS_PATH,
  ORDER_LIST_PATH,
  ORDER_DETAIL_PATH,
  SHOPPING_CART_PATH,
  PRIVACY_POLICY_PATH,
  TERMS_AND_CONDITIONS_PATH,
  REGISTRATION_PATH,
  RESET_PASSWORD_PATH,
  PROFILE_PATH,
  LOGIN_PATH,
  FORGOT_PASSWORD_PATH,
} from "../constant/path";

const ForgotPassword = lazy(() => import("./forgot_password"));
const Home = lazy(() => import("./home"));
const Menus = lazy(() => import("./menus"));
const Order = lazy(() => import("./order"));
const OrderSuccess = lazy(() => import("./order_success"));
const OrderList = lazy(() => import("./order_list"));
const OrderDetail = lazy(() => import("./order_detail"));
const ShoppingCart = lazy(() => import("./shopping_cart"));
const PrivacyPolicy = lazy(() => import("./privacy_policy"));
const TermsAndConditions = lazy(() => import("./terms_and_conditions"));
const Registration = lazy(() => import("./registration"));
const ResetPassword = lazy(() => import("./reset_password"));
const Profile = lazy(() => import("./profile"));
const Login = lazy(() => import("./login"));

const auth_routes = [
  {
    path: REGISTRATION_PATH,
    component: Registration,
  },
  {
    path: LOGIN_PATH,
    component: Login,
  },
];

const unprotected_routes = [
  {
    exact: true,
    path: HOME_PATH,
    component: Home,
  },
  {
    path: FORGOT_PASSWORD_PATH,
    component: ForgotPassword,
  },
  {
    path: RESET_PASSWORD_PATH,
    component: ResetPassword,
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
    path: PRIVACY_POLICY_PATH,
    component: PrivacyPolicy,
  },
  {
    path: TERMS_AND_CONDITIONS_PATH,
    component: TermsAndConditions,
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
    path: ORDER_DETAIL_PATH,
    component: OrderDetail,
  },
];

const logout_routes = [...unprotected_routes, ...auth_routes];
const logged_in_routes = [...unprotected_routes, ...protected_routes];

export { logout_routes, logged_in_routes };
