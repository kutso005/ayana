import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "./../assets/image/logo.webp"
export default function Testimonials() {
  const testimonials = [
    {
      quote: "Nam egestas porta posuere. Nunc velit lorem, vestibulum vitae massa nec.",
      author: "John Brown",
      position: "ABC Architects",
      image: logo
    },
    {
      quote: "Quisque scelerisque nec dolor id convallis. Vestibulum porta ipsum pretium.",
      author: "Jane Smith",
      position: "XYZ Designers",
      image: logo,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container">
      <h1 className="title">Testimonials</h1>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <div className="quote">
              <span className="ilo">❝</span>
              <p>{testimonial.quote}</p>
            </div>
            <div className="author">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="author-image"
              />
              <h3>{testimonial.author}</h3>
              <p>{testimonial.position}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
