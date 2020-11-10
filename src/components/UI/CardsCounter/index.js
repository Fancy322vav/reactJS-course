import React from "react";

function cardsCounter(props) {
  return (
    <h3 style={{ textAlign: "center" }}>
      Количество карточек:{" "}
      <span className="badge badge-secondary">{props.cards.length}</span>
    </h3>
  );
}

export default cardsCounter;
