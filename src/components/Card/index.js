import React, { useState, useEffect, useContext } from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import withLoadingDelay from "../../hoc/withLoadingDelay";
import { CardContext } from "../../context/CardContext";
import "./index.css";

const card = (props) => {
  const { saveChanges, cancelChanges } = useContext(CardContext);

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
    <React.Fragment>
      <div className={props.card.isChecked ? "card-checked" : "card"}>
        <CardHeader
          id={props.id}
          editMode={props.editMode}
          checked={props.isChecked}
          cardHead={props.card.Name}
          tempHead={cardTempState.tempCards.Name}
          view={props.isOnlyView}
          onChange={(event) => inputChangedHandler(event, "Name")}
          onSave={() => saveChanges(props.id, cardTempState.tempCards)}
          onCancel={() => cancelChanges(props.id)}
        />
        <CardBody
          editMode={props.editMode}
          cardBody={props.card.About}
          tempBody={cardTempState.tempCards.About}
          onChange={(event) => inputChangedHandler(event, "About")}
        />
      </div>
    </React.Fragment>
  );
};

export default withLoadingDelay(card, "card-size");
