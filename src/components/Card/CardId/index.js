import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Card from "../index";
import * as actions from "../../../redux/actions/actions";

const cardId = (props) => {
  const [id, setId] = useState("");

  useEffect(() => {
    props.onInitCards();
    setId(props.history.location.pathname.split(":")[1]);
  }, []);

  const card = props.cards.filter((card) => card.Number === id)[0];
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

const mapDispatchToProps = (dispatch) => {
  return {
    onInitCards: () => dispatch(actions.initCards()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cardId);
