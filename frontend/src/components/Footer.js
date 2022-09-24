import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
  FormGroup,
  Form,
} from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{ background: "#eaeaea", marginTop: "30px" }}>
      <Container className="pt-5 pb-2 px-0">
        <Row style={{ "--bs-gutter-y": "1.5rem" }}>
          <Col md={12} lg={3}>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h4>SHOPZEE</h4>
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas..
                </p>
              </ListGroupItem>
              <ListGroupItem>
                <strong>E :</strong> hello@cbox2.com
              </ListGroupItem>
              <ListGroupItem>
                <strong>UK :</strong> (303) 795-0928
              </ListGroupItem>
              <ListGroupItem>
                <strong>International :</strong> +44203 788 7842
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h4 style={{ color: "#232529" }}>ABOUT US</h4>
              </ListGroupItem>
              <ListGroupItem>Cases &amp; Protection</ListGroupItem>
              <ListGroupItem>Headphones &amp; Speakers</ListGroupItem>
              <ListGroupItem>Power &amp; Cables</ListGroupItem>
              <ListGroupItem>Creativity</ListGroupItem>
              <ListGroupItem>Drones</ListGroupItem>
              <ListGroupItem>Gaming</ListGroupItem>
            </ListGroup>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h4 style={{ color: "#232529" }}>CUSTOMER SERVICE</h4>
              </ListGroupItem>
              <ListGroupItem>Help Center</ListGroupItem>
              <ListGroupItem>Store Locations</ListGroupItem>
              <ListGroupItem>We deliver almost anywhere!</ListGroupItem>
              <ListGroupItem>Registry</ListGroupItem>
              <ListGroupItem>Privacy Policy</ListGroupItem>
              <ListGroupItem>Terms of service</ListGroupItem>
              <ListGroupItem>Careers</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={12} lg={3}>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h4>NEWSLETTER</h4>
                <p>
                  Learn about events,contests,designing tips and more?Ofcourse
                  you do
                </p>
              </ListGroupItem>
              <ListGroupItem>
                <Form>
                  <FormGroup className="d-flex gap-2">
                    <Form.Control
                      type="email"
                      id="exampleinputemail1"
                      placeholder="Your email adress..."
                    />
                    <Button
                      type="submit"
                      style={{ padding: "0.4rem 1rem" }}
                      variant="dark"
                    >
                      Submit
                    </Button>
                  </FormGroup>
                </Form>
              </ListGroupItem>
              <ListGroupItem className="mt-3">
                <h4 style={{ color: "#232529" }}>Follow us</h4>
                <Button
                  style={{
                    background: "#232529",
                    color: "#ffffff",
                    borderRadius: "50%",
                    padding: "10px 15px",
                  }}
                >
                  <i className="fa-brands fa-twitter"></i>
                </Button>
                <Button
                  style={{
                    background: "#232529",
                    color: "#ffffff",
                    borderRadius: "50%",
                    padding: "10px 15px",
                  }}
                >
                  <i className="fa-brands fa-dribbble"></i>
                </Button>
                <Button
                  style={{
                    background: "#232529",
                    color: "#ffffff",
                    borderRadius: "50%",
                    padding: "10px 15px",
                  }}
                >
                  <i className="fa-brands fa-behance"></i>
                </Button>
                <Button
                  style={{
                    background: "#232529",
                    color: "#ffffff",
                    borderRadius: "50%",
                    padding: "10px 15px",
                  }}
                >
                  <i className="fa-brands fa-instagram"></i>
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center py-2">Copyright &copy; ShopZee</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
