import React from "react";
import Card from "../Card";
import "./index.css";

const cardList = (props) => {
  const card = props.cards.map((card) => {
    return (
      <Card
        key={card.Number}
        card={card}
        id={card.Number}
        editMode={card.isEditMode}
        isPartOfList
      />
    );
  });
  return <div className="card-list">{card}</div>;
};

export default cardList;
