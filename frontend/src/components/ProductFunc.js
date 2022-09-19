import React from "react";
import { Link } from "react-router-dom";

const ProductFunc = ({ productId }) => {
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
      <div className="btn">
        <i className="fa-regular fa-heart"></i>
      </div>
    </div>
  );
};

export default ProductFunc;
