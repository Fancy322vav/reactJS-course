import React, { useContext } from "react";
import Card from "../Card";
import { CardContext } from "../../context/CardContext";
import "./index.css";

const cardList = (props) => {
  const { cards } = useContext(CardContext);
  const card = cards.map((card) => {
    return (
      <Card
        key={card.Number}
        card={card}
        id={card.Number}
        editMode={card.isEditMode}
        isOnlyView={props.isOnlyView}
      />
    );
  });
  return <div className="card-list">{card}</div>;
};

export default cardList;
