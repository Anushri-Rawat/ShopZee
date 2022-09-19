import React from "react";
import {
  Row,
  ListGroup,
  Col,
  ListGroupItem,
  Badge,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";

const OrderSummary = () => {
  const cart = useSelector((state) => state.cart);

  const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
  //calculate price
  cart.itemsPrice = addDecimal(
    cart.cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)
  );

  cart.shippingPrice = addDecimal(cart.itemsPrice > 100 ? 0 : 100);

  cart.taxPrice = addDecimal(Number(0.15 * cart.itemsPrice));

  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);
  return (
    <FormContainer size={11}>
      <ListGroup>
        {cart.cartItems.map((item) => (
          <ListGroupItem key={item.product}>
            <Row>
              <Col sm={2}>
                <Image src={item.image} alt={item.name} fluid rounded />
                <Badge
                  bg="danger"
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "0",
                  }}
                >
                  {item.qty}
                </Badge>
              </Col>
              <Col sm={8}>
                <Link to={`/product/${item.product}`}>{item.name}</Link>
              </Col>
              <Col sm={2}>${item.price}</Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      <ListGroup className="my-4">
        <ListGroupItem>
          <h5>
            Subtotal (
            {cart.cartItems.reduce((acc, item) => acc + Number(item.qty), 0)})
            items
          </h5>
          ${cart.itemsPrice}
        </ListGroupItem>
        <ListGroupItem>
          <h5>Shipping Price</h5>${cart.shippingPrice}
        </ListGroupItem>
        <ListGroupItem>
          <h5>Tax Price</h5>${cart.taxPrice}
        </ListGroupItem>
      </ListGroup>
      <ListGroup>
        <ListGroupItem>
          <h5>Total Price</h5>${cart.totalPrice}
        </ListGroupItem>
      </ListGroup>
    </FormContainer>
  );
};

export default OrderSummary;
