import React from "react";

import "./PlanTripCard.css";

function Card({ src, title, description, price, rating }) {
  return (
    <div>
      <div className="cardBody">
        <img src={src} alt=""></img>
        <i
          class="fa-sharp fa-solid fa-star"
          style={{ fontSize: "12px", marginLeft: "10px" }}
        >
          {rating} : {title}
        </i>

        <div className="cardBody__info">
          <h6>{description}</h6>

          <span style={{ fontSize: "12px" }}>
            <b>From {price}</b>/person
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
