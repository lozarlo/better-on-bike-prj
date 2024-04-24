import React from "react";
import "../../../styles/main.css";

function Card(props) {
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
        <div className="gallery-cards-container">
          {props.galleryImgs.map((singleImage, index) => (
            <div className="gallery-card-wrapper" key={index}>
              <img className={singleImage.class} src={singleImage.image} alt={singleImage.alt} title={singleImage.title}></img>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Card;
