import React from "react";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CheckoutStep = ({ step1, step2, step3, step4 }) => {
  return (
    <>
      <LinkContainer to="/">
        <h1>ShopZee-Electronics Store</h1>
      </LinkContainer>
      <Nav className=" mb-4">
        <NavItem className="d-flex align-items-center">
          {step1 ? (
            <LinkContainer to="/login" style={{ color: "#1990c6" }}>
              <NavLink>Sign In</NavLink>
            </LinkContainer>
          ) : (
            <NavLink disabled>Sign In</NavLink>
          )}
          <i class="fa-solid fa-chevron-right"></i>
        </NavItem>
        <NavItem className="d-flex align-items-center">
          {step2 ? (
            <LinkContainer to="/shipping" style={{ color: "#1990c6" }}>
              <NavLink>Shipping</NavLink>
            </LinkContainer>
          ) : (
            <NavLink disabled>Shipping</NavLink>
          )}
          <i class="fa-solid fa-chevron-right"></i>
        </NavItem>
        <NavItem className="d-flex align-items-center">
          {step3 ? (
            <LinkContainer to="/payments" style={{ color: "#1990c6" }}>
              <NavLink>Payments</NavLink>
            </LinkContainer>
          ) : (
            <NavLink disabled>Payments</NavLink>
          )}
          <i class="fa-solid fa-chevron-right"></i>
        </NavItem>
        <NavItem className="d-flex align-items-center">
          {step4 ? (
            <LinkContainer to="/placeorder" style={{ color: "#1990c6" }}>
              <NavLink>Place Order</NavLink>
            </LinkContainer>
          ) : (
            <NavLink disabled>Place Order</NavLink>
          )}
        </NavItem>
      </Nav>
    </>
  );
};

export default CheckoutStep;
