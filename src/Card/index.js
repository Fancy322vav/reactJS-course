import React from "react";
import "./Card.css";

const card = (props) => {
  const cardCheckedHandler = () => {
    const card = document.getElementById("card");
    card.className === "card"
      ? (card.className = "card-checked")
      : (card.className = "card");
  };

  return (
    <div id="card" className="card">
      <div className="card-header">
        {props.header}
        <input type="checkbox" onChange={cardCheckedHandler} />
      </div>
      <div className="card-text">{props.children}</div>
    </div>
  );
};

export default card;
