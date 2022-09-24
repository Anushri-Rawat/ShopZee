import {
  SHOW_MODAL,
  CLOSE_MODAL,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "../constants/wishListConstants";

export const modalReducer = (state = { showModal: false }, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, showModal: true };
    case CLOSE_MODAL:
      return { ...state, showModal: false };
    default:
      return state;
  }
};

export const wishListReducer = (state = { wishListItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      const item = action.payload;
      const existItem = state.wishListItems.find(
        (x) => x.product === item.product
      );
      if (existItem) {
        return { ...state };
      } else {
        return { ...state, wishListItems: [...state.wishListItems, item] };
      }
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishListItems: state.wishListItems.filter(
          (x) => x.product !== action.payload
        ),
      };
    default:
      return state;
  }
};
