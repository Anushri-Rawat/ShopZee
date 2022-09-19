import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  ListGroupItem,
  Button,
  FormControl,
  Container,
} from "react-bootstrap";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../components/Rating";
import { getProductDetails } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Meta from "../components/Meta";
import ScrollableNav from "../components/ScrollableNav";

const ProductScreen = () => {
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  return (
    <Container>
      <Link to="/">
        <Button className="btn my-3" style={{ background: "#f33c3c" }}>
          GO BACK
        </Button>
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message varaint="error">{error}</Message>
      ) : (
        <>
          <Meta title={product.name} />
          <Row>
            <Col md={4} lg={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={5} lg={3}>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <h3>{product.name}</h3>
                </ListGroupItem>
                <ListGroupItem>
                  <Rating
                    value={product?.rating}
                    text={`${product?.numReviews} reviews`}
                  />
                </ListGroupItem>
                <ListGroupItem>Price: ${product.price}</ListGroupItem>
                <ListGroupItem>
                  Description: {product.description}
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup>
                  <ListGroupItem>
                    <Row>
                      <Col>Price</Col>
                      <Col>${product.price}</Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col>Status</Col>
                      {product.countInStock > 0 ? (
                        <Col style={{ color: "#5cb85c" }}>In Stock</Col>
                      ) : (
                        <Col style={{ color: "red" }}>Out Of Stock</Col>
                      )}
                    </Row>
                  </ListGroupItem>
                  {product.countInStock > 0 && (
                    <ListGroupItem>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <FormControl
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(Number(e.target.value))}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </FormControl>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  )}
                  <ListGroupItem className="d-grid">
                    <Button
                      onClick={addToCartHandler}
                      className="btn-block"
                      style={{ background: "#f33c3c" }}
                      type="submit"
                      disabled={product.countInStock === 0}
                    >
                      Add to cart
                    </Button>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
      <Row style={{ marginTop: "6rem" }}>
        <ListGroup variant="flush" className="details-tab mb-5">
          <ListGroupItem className="justify-content-center d-flex gap-5">
            <a href="#description" id="navigationDes">
              <h4>Description</h4>
            </a>
            <a href="#Reviews" id="navigationRew">
              <h4>Reviews</h4>
            </a>
          </ListGroupItem>
        </ListGroup>
        <ScrollableNav id={id} />
      </Row>
    </Container>
  );
};

export default ProductScreen;
