import React from "react";
import Card from "../Card";
import "./index.css";

const cardList = (props) => {
  const card = props.cards.map((card) => {
    return (
      <Card
        key={card.id}
        card={card}
        editMode={card.isEditMode}
        isOnlyView={props.isOnlyView}
        onCheck={() => props.onCheck(card.id)}
        onEdit={() => props.onEdit(card.id)}
        onCancel={props.onCancel}
        onSave={props.onSave}
      />
    );
  });
  return <div className="card-list">{card}</div>;
};

export default cardList;
