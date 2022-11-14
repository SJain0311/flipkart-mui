import React from "react";
import Slider from "infinite-react-carousel";
import craousel from "../component/images/craousel.jpeg"
import "./Carousel.css"

const images = [
    {
      id: "1",
      image: craousel
    },
    {
      id: "2",
      image: craousel,
    },
    {
      id: "3",
      image: craousel,
    },
  ];

const Carousel = () => {
  return (
    <section className="slider">
      <Slider className="slider__content" autoplay="true">
        {images.map((image) => (
          <div key={image.id} className="slider__content--item">
            <img src={image.image} alt={image.title} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;