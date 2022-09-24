import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToWishList } from "../actions/wishListActions";
import { SHOW_MODAL } from "../constants/wishListConstants";

const ProductFunc = ({ productId }) => {
  const dispatch = useDispatch();
  return (
    <div className="product-functionality">
      <Link to={`/cart/${productId}?qty=1`}>
        <div className="btn">
          <i className="fas fa-shopping-cart"></i>
        </div>
      </Link>
      <Link to={`/product/${productId}`}>
        <div className="btn">
          <i className="fas fa-magnifying-glass"></i>
        </div>
      </Link>
      <div
        className="btn"
        onClick={() => {
          dispatch({ type: SHOW_MODAL });
          dispatch(addToWishList(productId));
        }}
      >
        <i className="fas fa-heart"></i>
      </div>
    </div>
  );
};

export default ProductFunc;
