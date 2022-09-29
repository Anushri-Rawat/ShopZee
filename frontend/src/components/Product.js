import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import ProductFunc from "./ProductFunc";

const Product = ({ product }) => {
  return (
    <Card
      className="product-card my-3 rounded"
      style={{ position: "relative", height: "95%" }}
    >
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          variant="top"
          style={{ maxHeight: "200px" }}
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text>${product.price}</Card.Text>
      </Card.Body>
      <ProductFunc productId={product._id} />
    </Card>
  );
};

export default Product;
