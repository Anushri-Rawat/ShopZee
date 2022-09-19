import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { Row, Col, Nav, Image, Container } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Meta from "../components/Meta";
import Testimonials from "../components/Testimonials";
import ProductCarousel from "../components/ProductCarousel";
import { getProductList } from "../actions/productActions";

const imgStyle = {
  width: "100%",
  transition: "opacity .8s ease,transform 2s cubic-bezier(0,0,.44,1.18)",
  objectFit: "cover",
  minHeight: "210px",
};

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.productList
  );
  useEffect(() => {
    dispatch(getProductList("", "", 4));
  }, []);

  return (
    <div style={{ position: "relative", top: "-80px" }}>
      <Meta />
      <ProductCarousel />
      <Container style={{ marginTop: "60px" }}>
        <Row className="mb-2">
          <h3>NEW ARRIVALS</h3>
          <Nav className="categories" style={{ gap: "5px" }}>
            <Nav.Link
              className="normalBtn"
              style={{
                color: "#fff",
                background: "#f33c3c",
              }}
            >
              Headphones
            </Nav.Link>
            <Nav.Link className="normalBtn">Creativity</Nav.Link>
            <Nav.Link className="normalBtn">Power - Cable</Nav.Link>
            <Nav.Link className="normalBtn">Case - Protection</Nav.Link>
          </Nav>
        </Row>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <Row>
              {products.map((product) => (
                <Col sm={12} md={6} lg={3} key={product._id}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </>
        )}
        <Testimonials />
      </Container>
      <Row style={{ "--bs-gutter-x": 0 }}>
        <Col sm={12} md={4} style={{ position: "relative" }}>
          <Image
            style={imgStyle}
            fluid
            alt="banner"
            src="//cdn.shopify.com/s/files/1/0159/9193/0928/files/G402.jpg?v=1568261085"
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              transform: " translateY(-50%)",
              left: "48px",
              zIndex: 1,
            }}
          >
            <label>TOP SELLER</label>
            <h3>Logitech G102</h3>
            <div style={{ marginBottom: "32px" }}>
              Get 30% off use code: cbozstore
            </div>
            <a
              className="normalBtn"
              style={{ background: "black", color: "white" }}
            >
              Shop now
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>
          </div>
        </Col>
        <Col sm={12} md={4} style={{ position: "relative" }}>
          <Image
            style={imgStyle}
            fluid
            alt="banner"
            src="https://cdn.shopify.com/s/files/1/0159/9193/0928/files/kisspng-noise-cancelling-headphones-microphone-sound-head-hd-headphones-5a7d6918948f48.jpg?v=1568261128"
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              transform: " translateY(-50%)",
              left: "48px",
              zIndex: 1,
              color: "white",
            }}
          >
            <label>TRENDING</label>
            <h3>Denon Headphones</h3>
            <div style={{ marginBottom: "32px" }}>Free shipping worldwide</div>
            <a
              className="normalBtn"
              style={{ background: "white", color: "black" }}
            >
              Shop now
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>
          </div>
        </Col>
        <Col sm={12} md={4} style={{ position: "relative" }}>
          <Image
            style={imgStyle}
            fluid
            alt="banner"
            src="https://cdn.shopify.com/s/files/1/0159/9193/0928/files/XboxOne2016_Cntrllr_ANL_TransBG_RGB_a9474c25-df98-4448-954f-23b57ea792f4.jpg?v=1568261815"
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              transform: " translateY(-50%)",
              left: "48px",
              zIndex: 1,
            }}
          >
            <label>NEW ARRIVAL</label>
            <h3>GAMEX 380</h3>
            <div style={{ marginBottom: "32px" }}>Best gamers collection</div>
            <a
              className="normalBtn"
              style={{ background: "black", color: "white" }}
            >
              Shop now
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeScreen;
