import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Card from "../Card";
import { useHistory } from "react-router-dom";

const cardId = (props) => {
  const [id, setId] = useState("");

  const history = useHistory();

  useEffect(() => {
    setId(history.location.pathname.split(":")[1]);
  }, []);

  const card = props.cards.find((card) => card.Number === id);
  let cardView = <h1 style={{ textAlign: "center" }}>No such a card</h1>;

  if (card) {
    cardView = (
      <Card
        key={card.Number}
        card={card}
        id={card.Number}
        editMode={card.isEditMode}
      />
    );
  }

  return <div>{cardView}</div>;
};

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  };
};

export default connect(mapStateToProps)(cardId);
