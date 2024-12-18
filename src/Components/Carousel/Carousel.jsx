import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      <div className="slide">
        <img src="/iStock-1.png" alt="Slide 1" />
        <div className="text-content">
          <h3>Thank you for taking part in cutting-edge
          Crohn’s disease research.</h3>
        </div>
        
      </div>
      <div className="slide">
        <img src="/iStock-2.png" alt="Slide 2" />
        <div className="text-content">
          <h3>Calculate your risk of Crohn’s disease and see how lifestyle changes may change the equation.</h3>
        </div>
       
      </div>
      <div className="slide">
        <img src="/iStock-3.png" alt="Slide 3" />
        <div className="text-content">
          <h3>Change now might reduce your risk of Crohn’s disease later. </h3>
         
        </div>
        
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
}
