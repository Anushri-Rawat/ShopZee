import React, { useEffect, useState } from "react";
import {
  ListGroup,
  ListGroupItem,
  Card,
  Row,
  Col,
  FormControl,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import Product from "../components/Product";
import { getProductList } from "../actions/productActions";

const colors = ["brown", "red", "grey", "yellow", "lightGrey", "blue"];

const CollectionScreen = () => {
  let { pageNumber } = useParams();
  pageNumber = pageNumber || 1;
  const [filterOption, setFilterOption] = useState({
    sort: "",
    price: "",
    color: "",
    brand: "",
  });

  const dispatch = useDispatch();
  const { loading, error, products, pages, page } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(getProductList("", pageNumber, 6, filterOption));
  }, [dispatch, pageNumber, filterOption]);

  return (
    <Container style={{ padding: "20px 0 60px" }}>
      <Row>
        <Col className="d-none d-lg-block" lg={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Form.Check
                  type="checkbox"
                  id={"Headphones"}
                  label={"Headphones"}
                />
              </ListGroupItem>
              <ListGroupItem>
                <Form.Check
                  type="checkbox"
                  id={"Speakers"}
                  label={"Speakers"}
                />
              </ListGroupItem>
              <ListGroupItem>
                {" "}
                <Form.Check
                  type="checkbox"
                  id={"SmartWatch"}
                  label={"SmartWatch"}
                />
              </ListGroupItem>
              <ListGroupItem>
                <Form.Check type="checkbox" id={"Camera"} label={"Camera"} />
              </ListGroupItem>
              <ListGroupItem>
                <Form.Check
                  type="checkbox"
                  id={"Gaming-Toys"}
                  label={"Gaming-Toys"}
                />
              </ListGroupItem>
            </ListGroup>
          </Card>
          <Card className="mt-4">
            <ListGroup>
              <ListGroupItem>
                <h3>Price</h3>
              </ListGroupItem>
              <ListGroupItem>
                <Form.Check type="checkbox" id={`$0-$100`} label={`$0-$100`} />
              </ListGroupItem>
              <ListGroupItem>
                <Form.Check type="checkbox" label={`$100-$200`} />
              </ListGroupItem>
              <ListGroupItem>
                <Form.Check type="checkbox" label={`$200-$400`} />
              </ListGroupItem>
              <ListGroupItem>
                <Form.Check type="checkbox" label={`$300-$500`} />
              </ListGroupItem>
              <ListGroupItem>
                <Form.Check type="checkbox" label={`$500-$1000`} />
              </ListGroupItem>
              <ListGroupItem>
                <Form.Check type="checkbox" label={`$1000+`} />
              </ListGroupItem>
            </ListGroup>
          </Card>
          <Card className="mt-4">
            <ListGroup>
              <ListGroupItem>
                <h3>Color</h3>
              </ListGroupItem>
              <ListGroupItem className="d-flex gap-2">
                {colors.map((color, i) => (
                  <div
                    style={{
                      background: `${color}`,
                      borderRadius: "50%",
                      width: "25px",
                      height: "25px",
                    }}
                    key={i}
                  ></div>
                ))}
              </ListGroupItem>
              <ListGroupItem></ListGroupItem>
            </ListGroup>
          </Card>
          <Card className="mt-4">
            <ListGroup>
              <ListGroupItem>
                <h3>Brands</h3>
              </ListGroupItem>
              {[...new Set(products.map((item) => item.brand))].map(
                (brand, i) => (
                  <ListGroupItem key={i}>
                    <Form.Check type="checkbox" label={brand} />
                  </ListGroupItem>
                )
              )}
            </ListGroup>
          </Card>
        </Col>
        <Col md={12} lg={9}>
          <Row>
            <Col md={6} lg={8}>
              <h3>We've got {products.length} products for you</h3>
            </Col>
            <Col md={6} lg={4}>
              <Form style={{ display: "flex", gap: "10px" }}>
                <FormControl
                  as="select"
                  value={filterOption.sort}
                  onChange={(e) => {
                    setFilterOption({ ...filterOption, sort: e.target.value });
                  }}
                >
                  {[
                    "Best Selling",
                    "Sort A-Z",
                    "Sort Z-A",
                    "Price high to low",
                    "Price low to high",
                  ].map((x, i) => (
                    <option key={i} value={x}>
                      {x}
                    </option>
                  ))}
                </FormControl>
                <Button type="submit" style={{ background: "#f33c3c" }}>
                  +Filter
                </Button>
              </Form>
            </Col>
          </Row>
          <Row>
            {loading && <Loader />}
            {products.map((product) => (
              <Col sm={6} md={4} key={product._id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Row className="d-grid">
            <Paginate pages={pages} page={page} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CollectionScreen;
