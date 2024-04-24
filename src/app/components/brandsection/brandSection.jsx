import React from "react";
import Card from "../card/card.jsx";
import "../../../styles/main.css";

function BrandSection(props) {
  return (
    <div className={props.css}>
      <div className="section-col">
        <h2 className="section-title">{props.title}</h2>
        <p>{props.colDescription}</p>
      </div>
      <Card iconList={props.BrandList} />
    </div>
  );
}
export default BrandSection;
