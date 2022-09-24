import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Button,
  Image,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  createProductReview,
  getProductDetails,
} from "../actions/productActions";
import Loader from "./Loader";
import Message from "./Message";
import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productConstants";
import Rating from "./Rating";

const ScrollableNav = ({ id }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const hash = window.location.hash;

  const {
    loading: loadingReview,
    error: errorReview,
    success,
  } = useSelector((state) => state.productCreateReview);

  const { product } = useSelector((state) => state.productDetails);

  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (success) {
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(getProductDetails(id));
    if (hash === "#description" || hash === "") {
      document.querySelector("#description").style.display = "block";
      document.querySelector("#navigationDes").classList.add("active");
      document.querySelector("#navigationRew").classList.remove("active");
      document.querySelector("#reviews").style.display = "none";
    } else {
      document.querySelector("#description").style.display = "none";
      document.querySelector("#navigationDes").classList.remove("active");
      document.querySelector("#navigationRew").classList.add("active");
      document.querySelector("#reviews").style.display = "block";
    }
  }, [hash, success, id, dispatch]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(createProductReview(id, { rating, comment }));
  };

  return (
    <Row className="tab-content">
      <Col id="description">
        <Row className="align-items-center">
          <Col sm={12} md={6}>
            <Image
              src="https://cdn2.shopify.com/s/files/1/0159/9193/0928/files/81bK0su8UvL_large.jpg?v=1563156268"
              fluid
              style={{ width: "100%" }}
            />
          </Col>
          <Col sm={12} md={6} className="align-items-center">
            <h4>Bring dance music to life</h4>
            <p>
              Get things going with EXTRA BASS1. A passive radiator works with
              the monaural speaker to enhance low-end tones, giving bass a boost
              - despite the compact size.
            </p>
          </Col>
        </Row>
        <Row className="my-5 align-items-center">
          <Col sm={12} md={6}>
            <h4>Any Time, any place</h4>
            <p>
              The SRS-XB10 is compact and wireless so it's easy to move. With a
              long battery life and a water-resistant surface, you're free to
              pick it up and put it anywhere.
            </p>
          </Col>
          <Col sm={12} md={6}>
            <Image
              src="https://cdn2.shopify.com/s/files/1/0159/9193/0928/files/14702526693406_large.jpg?v=1563156336"
              fluid
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
        <Row className="my-5 align-items-center">
          <Col sm={12} md={6}>
            <Image
              src="https://cdn2.shopify.com/s/files/1/0159/9193/0928/files/66974491125A0687B1593255043C51D2427203B5_F61BE9E6D28332E725AAAA3088479B31FMTJPEGSCL1_feature_large.jpg?v=1563156367"
              fluid
              style={{ width: "100%" }}
            />
          </Col>
          <Col sm={12} md={6}>
            <h4>Up to 16 hours of battery life</h4>
            <p>
              Listen for longer with up to 16 hours of battery life.3. A passive
              radiator works with the monaural speaker to enhance low-end
              tones...
            </p>
          </Col>
        </Row>
        <Row className="my-5 align-items-center">
          <Col sm={12} md={6}>
            <h4>Easy Bluetooth® connectivity with NFC One-touch</h4>
            <p>
              The SRS-XB10 is compact and wireless so it's easy to move. With a
              long battery life and a water-resistant surface, you're free to
              pick it up and put it anywhere.
            </p>
          </Col>
          <Col sm={12} md={6}>
            <Image
              fluid
              src="https://cdn2.shopify.com/s/files/1/0159/9193/0928/files/SRSXB10B_4_large.jpg?v=1563156429"
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
      </Col>
      <Col id="reviews">
        <Row className="mt-1">
          <Col md={6} className="justify-content-center">
            <h2>Reviews</h2>
            {product.reviews.length === 0 && <Message>No Reviews yet!</Message>}
            <ListGroup variant="flush">
              {product.reviews.map((review) => (
                <ListGroupItem key={review._id}>
                  <strong>{review.name}</strong>
                  <Rating value={review.rating} />
                  <p>{review.createdAt.substring(0, 10)}</p>
                  <p>{review.comment}</p>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col md={6}>
            <h2>Write a customer review.</h2>
            {loadingReview && <Loader />}
            {errorReview && <Message variant="danger">{errorReview}</Message>}
            {userInfo ? (
              <Form onSubmit={formSubmitHandler}>
                <FormGroup controlId="rating">
                  <FormLabel>Rating</FormLabel>
                  <FormControl
                    as="select"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option value="1">1 - Poor</option>
                    <option value="2">2 - Fair</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Very Good</option>
                    <option value="5">5 - Excellent</option>
                  </FormControl>
                </FormGroup>
                <FormGroup controlId="comment" className="my-3">
                  <FormLabel>Comment</FormLabel>
                  <FormControl
                    as="textarea"
                    row="3"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></FormControl>
                </FormGroup>
                <Button type="submit" style={{ background: "#f33c3c" }}>
                  Submit
                </Button>
              </Form>
            ) : (
              <Message>
                Please <Link to="/login">sign in</Link> to write a review
              </Message>
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ScrollableNav;
