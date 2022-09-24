import React, { useEffect } from "react";
import {
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
  FormControl,
  Button,
  Card,
  Container,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";
import Message from "../components/Message";

const CartScreen = () => {
  const { id } = useParams();
  const location = useLocation();
  const qty = new URLSearchParams(location.search).get("qty");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    if (id && qty) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkOutHandler = () => {
    navigate(`/login?redirect=shipping`);
  };

  return (
    <Container>
      <Row className="justify-content-center" style={{ rowGap: "30px" }}>
        <Col md={12} lg={8}>
          <h2 style={{ marginBottom: "30px" }}>Your Shopping cart</h2>
          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty.<Link to="/">Go back</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              <ListGroupItem className="d-none d-sm-block">
                <Row>
                  <Col sm={2}>
                    <strong>Product</strong>
                  </Col>
                  <Col sm={3}>
                    <strong>Name</strong>
                  </Col>
                  <Col sm={2}>
                    <strong>Price</strong>
                  </Col>
                  <Col sm={2}>
                    <strong>Qty</strong>
                  </Col>
                  <Col sm={2}></Col>
                </Row>
              </ListGroupItem>
              {cartItems?.map((item) => (
                <ListGroupItem key={item.product}>
                  <Row>
                    <Col sm={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col sm={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col sm={2}>{item.price}</Col>
                    <Col sm={2}>
                      <FormControl
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </FormControl>
                    </Col>
                    <Col sm={2}>
                      <Button
                        type="button"
                        onClick={() => removeFromCartHandler(item.product)}
                        variant="danger"
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={12} lg={8} className="text-center">
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h2>
                  Subtotal (
                  {cartItems.reduce((acc, item) => acc + Number(item.qty), 0)})
                  items
                </h2>
                $
                {cartItems
                  .reduce(
                    (acc, item) => acc + Number(item.qty) * Number(item.price),
                    0
                  )
                  .toFixed(2)}
              </ListGroupItem>
              <ListGroupItem className="d-grid">
                <Button
                  type="button"
                  variant="dark"
                  className="btn-block"
                  disabled={cartItems.length === 0}
                  onClick={checkOutHandler}
                >
                  Proceed to checkout
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartScreen;
