import React, { useState, useEffect } from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import "./index.css";

const card = (props) => {
  const [cardTempState, setCardTempState] = useState({
    tempCards: {},
  });

  useEffect(() => {
    setCardTempState({ tempCards: props.card });
  }, [props.editMode]);

  const inputChangedHandler = (event, property) => {
    const updatedTempCard = { ...cardTempState.tempCards };
    updatedTempCard[property] = event.target.value;
    setCardTempState({ tempCards: updatedTempCard });
  };

  return (
    <div className="card-size">
      <div className={props.card.isChecked ? "card-checked" : "card"}>
        <CardHeader
          editMode={props.editMode}
          checked={props.isChecked}
          cardHead={props.card.head}
          tempHead={cardTempState.tempCards.head}
          view={props.isOnlyView}
          onCheck={props.onCheck}
          onChange={(event) => inputChangedHandler(event, "head")}
          onCancel={() => props.onCancel(props.card.id)}
          onSave={() => props.onSave(props.card.id, cardTempState.tempCards)}
          onEdit={props.onEdit}
        />
        <CardBody
          editMode={props.editMode}
          cardBody={props.card.body}
          tempBody={cardTempState.tempCards.body}
          onChange={(event) => inputChangedHandler(event, "body")}
        />
      </div>
    </div>
  );
};

export default card;
