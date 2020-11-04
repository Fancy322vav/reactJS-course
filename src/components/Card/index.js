import React, { useState, useEffect } from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import withLoadingDelay from "../../hoc/withLoadingDelay";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/actions";
import "./index.css";

const card = (props) => {
  const [cardTempState, setCardTempState] = useState({});

  useEffect(() => {
    setCardTempState(props.card);
  }, [props.editMode]);

  const inputChangedHandler = (event, property) => {
    const updatedTempCard = { ...cardTempState };
    updatedTempCard[property] = event.target.value;
    setCardTempState(updatedTempCard);
  };

  const redirectToCardIdPage = () => {
    if (!props.editMode) {
      props.history.push("/card/:" + props.id);
    }
  };

  return (
    <React.Fragment>
      <div
        onDoubleClick={redirectToCardIdPage}
        className={props.card.isChecked ? "card-checked" : "card"}
      >
        <CardHeader
          id={props.id}
          editMode={props.editMode}
          checked={props.isChecked}
          cardHead={props.card.Name}
          tempHead={cardTempState.Name}
          view={props.isOnlyView}
          onChange={(event) => inputChangedHandler(event, "Name")}
          onSave={() =>
            props.onSaveChanges(props.cards, props.id, cardTempState)
          }
          onCancel={() => props.onCancelChanges(props.cards, props.id)}
        />
        <CardBody
          editMode={props.editMode}
          cardBody={props.card.About}
          tempBody={cardTempState.About}
          onChange={(event) => inputChangedHandler(event, "About")}
        />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveChanges: (cards, id, updatedTempCard) =>
      dispatch(actions.saveChanges(cards, id, updatedTempCard)),
    onCancelChanges: (cards, id) => dispatch(actions.cancelChanges(cards, id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLoadingDelay(card, "card-size"));
