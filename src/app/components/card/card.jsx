import React, { useState } from "react";
import "../../../styles/main.css";

function Card(props) {
  const [hoveredIndex, setHoveredIndex] = useState();
  const [notHoveredClass, setNotHoveredClass] = useState("");

  const handleMouseHover = (index) => {
    setHoveredIndex(index);
    setNotHoveredClass("not-higlighted");
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setNotHoveredClass("");
  };

  return (
    <>
      {props.iconList ? (
        <div className="cards-container">
          {props.iconList.map((brandIcon, index) => (
            <div className="card-wrapper" key={index}>
              <a
                className={"card" + " " + brandIcon.id}
                key={index}
                href={brandIcon.link}
              >
                <img
                  className={brandIcon.class}
                  src={brandIcon.image}
                  alt="Card Image"
                ></img>
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="gallery-cards-container"
          onMouseLeave={handleMouseLeave}
        >
          {props.galleryImgs.map((singleImage, index) => (
            <div
              className={`gallery-card-wrapper ${
                hoveredIndex === index ? "" : notHoveredClass}`}
              key={index}
              onMouseOver={() => handleMouseHover(index)}
            >
              <img
                className={singleImage.class}
                src={singleImage.image}
                alt={singleImage.alt}
                title={singleImage.title}
              ></img>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Card;
