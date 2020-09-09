import React from "react";
import "./Card.css";

const card = (props) => {
  return (
    <div className="card">
      <div className="card-header">{props.header}</div>
      <div className="card-text">{props.children}</div>
    </div>
  );
};

export default card;
