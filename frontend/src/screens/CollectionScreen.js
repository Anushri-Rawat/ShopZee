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
import Message from "../components/Message";

const colors = ["black", "red", "grey", "yellow", "lightGrey", "blue"];

const CollectionScreen = () => {
  let { pageNumber } = useParams();
  pageNumber = pageNumber || 1;
  const [filterOption, setFilterOption] = useState({
    sort: "",
  });
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState(null);
  const [price, setPrice] = useState("-");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");

  const dispatch = useDispatch();
  const { loading, error, products, pages, page } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    let arr = price ? price.split("-") : [];
    dispatch(
      getProductList("", pageNumber, 6, {
        ...filterOption,
        ...(category ? { category } : {}),
        ...(arr.length ? { "price[gte]": arr[0], "price[lte]": arr[1] } : {}),
        brand,
        color,
      })
    );
  }, [dispatch, pageNumber, filterOption, category, price, brand, color]);

  const sortHandler = (e) => {
    e.preventDefault();
    if (sort === "Best Selling") {
      setFilterOption({ ...filterOption, sort: "-rating" });
    } else if (sort === "Sort A-Z") {
      setFilterOption({ ...filterOption, sort: "name" });
    } else if (sort === "Sort Z-A") {
      setFilterOption({ ...filterOption, sort: "-name" });
    } else if (sort === "Price high to low") {
      setFilterOption({ ...filterOption, sort: "-price" });
    } else {
      setFilterOption({ ...filterOption, sort: "price" });
    }
  };

  return (
    <Container style={{ padding: "20px 10px 60px" }}>
      <Row>
        <Col className="d-none d-lg-block" lg={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Form.Check
                  onChange={(e) =>
                    setCategory((current) =>
                      current === e.target.value ? null : e.target.value
                    )
                  }
                  type="checkbox"
                  value="Headphones"
                  checked={category === "Headphones"}
                  label={"Headphones"}
                />
              </ListGroupItem>
              <ListGroupItem>
                <Form.Check
                  onChange={(e) =>
                    setCategory((current) =>
                      current === e.target.value ? null : e.target.value
                    )
                  }
                  type="checkbox"
                  value="Speakers"
                  checked={category === "Speakers"}
                  label={"Speakers"}
                />
              </ListGroupItem>
              <ListGroupItem>
                {" "}
                <Form.Check
                  onChange={(e) =>
                    setCategory((current) =>
                      current === e.target.value ? null : e.target.value
                    )
                  }
                  type="checkbox"
                  value="SmartWatch"
                  checked={category === "SmartWatch"}
                  label={"SmartWatch"}
                />
              </ListGroupItem>
              <ListGroupItem>
                <Form.Check
                  onChange={(e) =>
                    setCategory((current) =>
                      current === e.target.value ? null : e.target.value
                    )
                  }
                  type="checkbox"
                  value="Camera"
                  checked={category === "Camera"}
                  label={"Camera"}
                />
              </ListGroupItem>
              <ListGroupItem>
                <Form.Check
                  onChange={(e) =>
                    setCategory((current) =>
                      current === e.target.value ? null : e.target.value
                    )
                  }
                  type="checkbox"
                  value="Gaming-Toys"
                  checked={category === "Gaming-Toys"}
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
                <Form.Check
                  type="checkbox"
                  checked={price === `0-100`}
                  value={`0-100`}
                  label={`$0-$100`}
                  onChange={(e) =>
                    setPrice((current) =>
                      current === e.target.value ? null : e.target.value
                    )
                  }
                />
              </ListGroupItem>
              <ListGroupItem>
                <Form.Check
                  type="checkbox"
                  checked={price === `100-200`}
                  value={`100-200`}
                  label={`$100-$200`}
                  onChange={(e) =>
                    setPrice((current) =>
                      current === e.target.value ? null : e.target.value
                    )
                  }
                />
              </ListGroupItem>
              <ListGroupItem>
                <Form.Check
                  type="checkbox"
                  checked={price === `200-400`}
                  value={`200-400`}
                  label={`$200-$400`}
                  onChange={(e) =>
                    setPrice((current) =>
                      current === e.target.value ? null : e.target.value
                    )
                  }
                />
              </ListGroupItem>
              <ListGroupItem>
                <Form.Check
                  type="checkbox"
                  checked={price === `300-500`}
                  value={`300-500`}
                  label={`$300-$500`}
                  onChange={(e) =>
                    setPrice((current) =>
                      current === e.target.value ? null : e.target.value
                    )
                  }
                />
              </ListGroupItem>
              <ListGroupItem>
                <Form.Check
                  type="checkbox"
                  checked={price === `500-1000`}
                  value={`500-1000`}
                  label={`$500-$1000`}
                  onChange={(e) =>
                    setPrice((current) =>
                      current === e.target.value ? null : e.target.value
                    )
                  }
                />
              </ListGroupItem>
              <ListGroupItem>
                <Form.Check
                  type="checkbox"
                  checked={price === `1000-30000`}
                  value={`1000-30000`}
                  label={`$1000+`}
                  onChange={(e) =>
                    setPrice((current) =>
                      current === e.target.value ? null : e.target.value
                    )
                  }
                />
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
                    onClick={() => {
                      setColor(color);
                    }}
                    key={i}
                  ></div>
                ))}
                <div
                  onClick={() => {
                    setColor("");
                  }}
                >
                  <i className="fas fa-times"></i>
                </div>
              </ListGroupItem>
              <ListGroupItem></ListGroupItem>
            </ListGroup>
          </Card>
          <Card className="mt-4">
            <ListGroup>
              <ListGroupItem>
                <h3>Brands</h3>
              </ListGroupItem>
              <ListGroupItem>
                <Form.Check
                  type="checkbox"
                  checked={brand === "Apple"}
                  onChange={(e) => {
                    setBrand((current) =>
                      current === e.target.value ? "" : e.target.value
                    );
                  }}
                  value={"Apple"}
                  label={"Apple"}
                />
              </ListGroupItem>
              <ListGroupItem>
                <Form.Check
                  type="checkbox"
                  checked={brand === "Cannon"}
                  onChange={(e) => {
                    setBrand(e.target.value);
                  }}
                  value={"Cannon"}
                  label={"Cannon"}
                />
              </ListGroupItem>
              <ListGroupItem>
                <Form.Check
                  type="checkbox"
                  checked={brand === "Sony"}
                  onChange={(e) => {
                    setBrand((current) =>
                      current === e.target.value ? "" : e.target.value
                    );
                  }}
                  value={"Sony"}
                  label={"Sony"}
                />
              </ListGroupItem>
              <ListGroupItem>
                <Form.Check
                  type="checkbox"
                  checked={brand === "Microsoft"}
                  onChange={(e) => {
                    setBrand((current) =>
                      current === e.target.value ? "" : e.target.value
                    );
                  }}
                  value={"Microsoft"}
                  label={"Microsoft"}
                />
              </ListGroupItem>
              <ListGroupItem>
                <Form.Check
                  type="checkbox"
                  checked={brand === "Boat"}
                  onChange={(e) => {
                    setBrand((current) =>
                      current === e.target.value ? "" : e.target.value
                    );
                  }}
                  value={"Boat"}
                  label={"Boat"}
                />
              </ListGroupItem>
              <ListGroupItem>
                <Form.Check
                  type="checkbox"
                  checked={brand === "Amazon"}
                  onChange={(e) => {
                    setBrand((current) =>
                      current === e.target.value ? "" : e.target.value
                    );
                  }}
                  value={"Amazon"}
                  label={"Amazon"}
                />
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
        <Col md={12} lg={9}>
          <Row>
            <Col md={6} lg={8}>
              <h3>
                We've got {products.length ? products.length : 0} products for
                you
              </h3>
            </Col>
            <Col md={6} lg={4}>
              <Form
                style={{ display: "flex", gap: "10px" }}
                onSubmit={sortHandler}
              >
                <FormControl
                  as="select"
                  value={sort}
                  onChange={(e) => {
                    setSort(e.target.value);
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
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              products.map((product) => (
                <Col sm={6} md={4} key={product._id}>
                  <Product product={product} />
                </Col>
              ))
            )}
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
