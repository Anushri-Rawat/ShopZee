import React, { useState } from "react";
import {
  FormGroup,
  FormLabel,
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutStep from "../components/CheckoutStep";
import FormContainer from "../components/FormContainer";
import OrderSummary from "../components/OrderSummary";

const ShippingScreen = () => {
  const { shippingAddress } = useSelector((state) => state.cart);
  const [address, setAddress] = useState(shippingAddress.address || "");
  const [country, setCountry] = useState(shippingAddress.country || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ""
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, country, city, postalCode }));
    navigate("/payments");
  };

  return (
    <Container>
      <Row>
        <Col sm={12} md={6}>
          <FormContainer size={11}>
            <CheckoutStep step1 step2 />
            <h4>Shipping Address</h4>
            <Form onSubmit={submitHandler}>
              <FormGroup controlId="address" className="py-2">
                <FormLabel>Address</FormLabel>
                <FormControl
                  type="text"
                  placeholder="Enter the address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                ></FormControl>
              </FormGroup>
              <FormGroup controlId="country" className="py-2">
                <FormLabel>Country</FormLabel>
                <FormControl
                  type="text"
                  placeholder="Enter the country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                ></FormControl>
              </FormGroup>
              <FormGroup controlId="city" className="py-2">
                <FormLabel>City</FormLabel>
                <FormControl
                  type="text"
                  placeholder="Enter the city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                ></FormControl>
              </FormGroup>
              <FormGroup controlId="postalCode" className="py-2">
                <FormLabel>Postal Code</FormLabel>
                <FormControl
                  type="text"
                  placeholder="Enter the postal code"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  required
                ></FormControl>
              </FormGroup>
              <FormGroup
                className="d-flex align-items-center"
                style={{ justifyContent: "space-between" }}
              >
                <Link to="/cart" className="mt-3">
                  <p style={{ color: "#1990c6" }}>Return to cart</p>
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

export default ShippingScreen;
