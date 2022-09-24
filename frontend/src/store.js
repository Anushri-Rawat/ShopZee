import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productCreateReducer,
  productCreateReviewReducer,
  productDeleteReducer,
  productDetailsReducer,
  productListReducer,
  producttopRatedReducer,
  productUpdateReducer,
} from "./reducers/productReducers.js";
import { cartReducer } from "./reducers/cartReducers.js";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from "./reducers/userReducers.js";
import {
  createOrderReducer,
  myOrdersListReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderDeliverReducer,
  OrdersListReducer,
} from "./reducers/orderReducers.js";
import { modalReducer, wishListReducer } from "./reducers/wishList.js";

const reducers = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  createOrder: createOrderReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  myOrdersList: myOrdersListReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productCreateReview: productCreateReviewReducer,
  ordersList: OrdersListReducer,
  productTopRated: producttopRatedReducer,
  modal: modalReducer,
  wishList: wishListReducer,
});

const cartItemsFromSTorage =
  JSON.parse(localStorage.getItem("cartItems")) || [];

const wishListItemsFromStorage =
  JSON.parse(localStorage.getItem("wishListItems")) || [];

const userInfoFromStorage =
  JSON.parse(localStorage.getItem("userInfo")) || null;

const shippingAddressFronStorage =
  JSON.parse(localStorage.getItem("shippingAddress")) || {};

const initialState = {
  cart: {
    cartItems: cartItemsFromSTorage,
    shippingAddress: shippingAddressFronStorage,
  },
  wishList: { wishListItems: wishListItemsFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
  modal: { showModal: false },
};
const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
