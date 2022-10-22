import React from "react";
import { useHistory } from "react-router-dom";

import "./Card.css";

function Card({ src, description }) {
  const history = useHistory();
  return (
    <div className="card">
      <img src={src} alt="" />

      <div className="card__info">
        <button onClick={() => history.push("/search")}> Show All </button>
        <h4>{description}</h4>
      </div>
    </div>
  );
}

export default Card;
