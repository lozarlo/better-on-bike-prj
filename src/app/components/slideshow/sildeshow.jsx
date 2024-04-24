import React, { useState, useEffect } from "react";
import "../../../styles/main.css";

function Slideshow(props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    setCurrentSlide((currentSlide + 1) % props.imgArray.length);
  }

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <div className="slideshow-container">
      {props.imgArray.map((homeImg, index) => (
        <div key={index} className={'slide ' + (index === currentSlide ? 'slide-active' : 'slide-hidden')}>
          <img className="carousel-img" src={homeImg} alt="Hero Image" />
        </div>
      ))}
    </div>
  );
}

export default Slideshow;
