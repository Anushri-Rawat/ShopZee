import React, { useState } from "react";
import {
  FormGroup,
  FormLabel,
  Form,
  Button,
  Col,
  FormCheck,
  Container,
  Row,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { useSelector, useDispatch } from "react-redux";
import CheckoutStep from "../components/CheckoutStep";
import { savePaymentMethod } from "../actions/cartActions";
import OrderSummary from "../components/OrderSummary";

const PaymentScreen = () => {
  const { shippingAddress } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.userLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!shippingAddress) {
    navigate("/shipping");
  }
  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  return (
    <Container>
      <Row>
        <Col sm={12} md={6}>
          <FormContainer size={11}>
            <CheckoutStep step1 step2 step3 />
            <ListGroup>
              <ListGroupItem>
                <Row>
                  <Col sm={3}>Contact</Col>
                  <Col sm={9}>{userInfo.email}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col sm={3}>Ship to</Col>
                  <Col sm={7}>
                    {shippingAddress.address},{shippingAddress.city},
                    {shippingAddress.postalCode},{shippingAddress.country}
                  </Col>
                  <Col sm={2}>
                    <Link to="/Shipping" style={{ color: "#1990c6" }}>
                      Change
                    </Link>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
            <h3 className="mt-4 mb-3">Payment Method</h3>
            <Form onSubmit={submitHandler}>
              <FormGroup>
                <FormLabel as="legend" style={{ fontSize: "18px" }}>
                  Select Method
                </FormLabel>
                <Col>
                  <FormCheck
                    type="radio"
                    label="PayPal or Credit Card"
                    value="PayPal"
                    name="paymentMethod"
                    checked
                    onChange={(e) => setPaymentMethod(e.target.method)}
                  ></FormCheck>
                  <FormCheck
                    type="radio"
                    label="Stripe"
                    value="Stripe"
                    name="paymentMethod"
                    onChange={(e) => setPaymentMethod(e.target.method)}
                  ></FormCheck>
                </Col>
              </FormGroup>
              <FormGroup
                className="d-flex align-items-center"
                style={{ justifyContent: "space-between" }}
              >
                <Link to="/cart" className="mt-3">
                  <p style={{ color: "#1990c6" }}>Return to Information</p>
                </Link>
                <Button
                  type="submit"
                  variant="primary"
                  style={{ background: "#1990c6" }}
                  className="mt-3"
                >
                  Continue
                </Button>
              </FormGroup>
            </Form>
          </FormContainer>
        </Col>
        <Col
          sm={12}
          md={6}
          className="shipping-order-info"
          style={{ background: "#fafafa" }}
        >
          <OrderSummary />
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentScreen;
