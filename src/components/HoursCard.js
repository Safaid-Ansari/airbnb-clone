import React from "react";
import "./HoursCard.css";
export default function HoursCard({ src, rating, price, description }) {
  return (
    <div className="Container">
      <div className="imgContainer">
        <img src={src} alt="" />
      </div>
      <div className="infoContainer">
        <i className="fa-regular fa-heart"></i>
        <i
          className="fa-sharp fa-solid fa-star"
          style={{ fontSize: "12px", marginLeft: "10px" }}
        >
          {rating}
        </i>
        <h5>{description}</h5>
        <h5>
          <b>From ${price}</b>/person
        </h5>
        <div className="buttons">
          <span>9:00 PM</span>
          <span>9:00 AM</span>
        </div>
      </div>
    </div>
  );
}
