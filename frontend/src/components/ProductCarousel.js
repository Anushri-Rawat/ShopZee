import React from "react";
import { Carousel, CarouselItem, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const bannerArray = [
  {
    id: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0159/9193/0928/files/slideshow-v1-img1.jpg?v=1568455601",
    name: "phone",
    content1: "Color your Look",
    content2: "Featured Apple Accessories",
  },
  {
    id: 2,
    image:
      "https://cdn.shopify.com/s/files/1/0159/9193/0928/files/Apple-Watch-S3-MQL02-42mm-Silver1.jpg?v=1572075446",
    name: "smartWatch",
    content1: "Newbrand.Fresh",
    content2: "Feature Apple Accesories",
  },
  {
    id: 3,
    image:
      "https://cdn.shopify.com/s/files/1/0159/9193/0928/files/Background-copy.jpg?v=1572075610",
    name: "airpods",
    content1: "AirPods",
    content2: "Wireless.Effortsless.Magical",
  },
];

const ProductCarousel = () => {
  return (
    <Carousel pause="hover" className="bg-dark">
      {bannerArray.map((item) => (
        <CarouselItem key={item.id}>
          <Link to={`/product/${item.id}`}>
            <Image src={item.image} alt={item.name} fluid />
            <Carousel.Caption>
              <h3 className="content1">{item.content1}</h3>
              <p className="content2">{item.content2}</p>
              <Link className="btn-slideshow" to="/collections/all">
                SHOP NOW
              </Link>
            </Carousel.Caption>
          </Link>
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
