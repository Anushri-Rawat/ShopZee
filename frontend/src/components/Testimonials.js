import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import Rating from "./Rating";

const authorsList = [
  {
    name: "Kelly Shah",
    designation: "graphic designer",
    rating: 5,
    description:
      "Saved our business! We have no regrets! Thanks for the great service. Sunmi is worth much more than I paid Saved our business! We have no regrets! Thanks for the great service. Sunmi is worth much more!",
  },
  {
    name: "Vinod Kumar",
    designation: "Marketing Personal",
    rating: 5,
    description:
      "Saved our business! We have no regrets! Thanks for the great service. Sunmi is worth much more than I paid Saved our business! We have no regrets! Thanks for the great service. Sunmi is worth much more!",
  },
  {
    name: "Lakshay Kumar",
    designation: "Frontend Developer",
    rating: 5,
    description:
      "Saved our business! We have no regrets! Thanks for the great service. Sunmi is worth much more than I paid Saved our business! We have no regrets! Thanks for the great service. Sunmi is worth much more!",
  },
];

const Testimonials = () => {
  return (
    <Row style={{ padding: "100px 0 120px", "--bs-gutter-y": "1.5rem" }}>
      <h3 style={{ fontWeight: 700, marginBottom: "25px" }}>Testimonials</h3>
      {authorsList.map((author, i) => (
        <Col key={i} sm={12} md={4}>
          <Card>
            <Card.Body>
              <div className="d-flex align-items-center gap-2">
                <img
                  width="60"
                  height="60"
                  data-src="//cdn.shopify.com/s/files/1/0159/9193/0928/files/Untit.png?v=1575435476"
                  alt="testimonial"
                  src="//cdn.shopify.com/s/files/1/0159/9193/0928/files/Untit.png?v=1575435476"
                />
                <div className="author-info">
                  <h5>{author.name}</h5>
                  <p>{author.designation}</p>
                </div>
              </div>
              <Rating value={author.rating} />
              <Card.Text>{author.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Testimonials;
