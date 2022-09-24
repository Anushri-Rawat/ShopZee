import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "../constants/wishListConstants";
import axios from "axios";

export const addToWishList = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  dispatch({
    type: ADD_TO_WISHLIST,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
    },
  });

  localStorage.setItem(
    "wishListItems",
    JSON.stringify(getState().wishList.wishListItems)
  );
};

export const removeFromWishList = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_WISHLIST,
    payload: id,
  });

  localStorage.setItem(
    "wishListItems",
    JSON.stringify(getState().wishList.wishListItems)
  );
};
