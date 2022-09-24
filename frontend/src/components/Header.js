import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  NavbarBrand,
  NavLink,
  Badge,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userActions";
import { SHOW_MODAL } from "../constants/wishListConstants";

const Header = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishListItems } = useSelector((state) => state.wishList);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <NavbarBrand>ShopZee</NavbarBrand>
          </LinkContainer>
          <Nav className="justify-content-center flex-grow-1 d-none d-lg-flex">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/collections/all">
              <Nav.Link>Shop</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Pages" id="username">
              {userInfo && (
                <>
                  <LinkContainer to="/cart">
                    <NavDropdown.Item>Cart</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item
                    onClick={() => {
                      dispatch({ type: SHOW_MODAL });
                    }}
                  >
                    WishList
                  </NavDropdown.Item>
                </>
              )}
              {!userInfo && (
                <LinkContainer to="/login">
                  <NavDropdown.Item>Login/Register</NavDropdown.Item>
                </LinkContainer>
              )}
            </NavDropdown>
            <Nav.Link>Contact</Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end flex-grow-0"
          >
            <Nav className="ml-auto">
              {userInfo && (
                <>
                  <LinkContainer to="/cart">
                    <NavLink>
                      <i className="fas fa-shopping-cart"></i>
                      {"  "}Cart
                      <Badge
                        bg="danger"
                        style={{
                          position: "relative",
                          top: "-10px",
                          right: "0",
                        }}
                      >
                        {cartItems.length}
                      </Badge>
                    </NavLink>
                  </LinkContainer>
                  <NavLink onClick={() => dispatch({ type: SHOW_MODAL })}>
                    <i className="fas fa-heart"></i>
                    {"  "}WhishList
                    <Badge
                      bg="danger"
                      style={{
                        position: "relative",
                        top: "-10px",
                        right: "0",
                      }}
                    >
                      {wishListItems.length}
                    </Badge>
                  </NavLink>
                </>
              )}
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <NavLink>
                    <i className="fas fa-user"></i> Sign in
                  </NavLink>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="admin" id="adminMenu">
                  <LinkContainer to="/admin/userList">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productList">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderList">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
