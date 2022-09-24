import React from "react";
import {
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
  Modal,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromWishList } from "../actions/wishListActions";
import Message from "../components/Message";
import { CLOSE_MODAL } from "../constants/wishListConstants";

const WishListScreen = () => {
  const dispatch = useDispatch();
  const { wishListItems } = useSelector((state) => state.wishList);
  const { showModal } = useSelector((state) => state.modal);

  const handleClose = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  const removeFromWishListHandler = (id) => {
    dispatch(removeFromWishList(id));
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>WishList</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {wishListItems.length == 0 ? (
          <Message>No items in the wishlist.</Message>
        ) : (
          <ListGroup variant="flush">
            <ListGroupItem className="d-none d-sm-block">
              <Row>
                <Col sm={2}>
                  <strong>Product</strong>
                </Col>
                <Col sm={6}>
                  <strong>Name</strong>
                </Col>
                <Col sm={2}>
                  <strong>Price</strong>
                </Col>
                <Col sm={2}></Col>
              </Row>
            </ListGroupItem>

            {wishListItems.map((item) => (
              <ListGroupItem key={item.product}>
                <Row>
                  <Col sm={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col sm={6}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col sm={2}>{item.price}</Col>
                  <Col sm={2}>
                    <i
                      className="fas fa-xmark"
                      onClick={() => removeFromWishListHandler(item.product)}
                    ></i>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default WishListScreen;
