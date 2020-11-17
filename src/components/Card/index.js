import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import withLoadingDelay from "../../hoc/withLoadingDelay";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions/actions";
import "./index.css";

const card = (props) => {
  const [cardTempState, setCardTempState] = useState({});

  const history = useHistory();

  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);

  useEffect(() => {
    setCardTempState(props.card);
  }, [props.editMode]);

  const inputChangedHandler = (event, property) => {
    const updatedTempCard = { ...cardTempState };
    updatedTempCard[property] = event.target.value;
    setCardTempState(updatedTempCard);
  };

  const redirectToCardIdPage = () => {
    history.push("/card/:" + props.id);
  };

  return (
    <React.Fragment>
      <div
        onDoubleClick={
          !props.editMode && props.isPartOfList ? redirectToCardIdPage : null
        }
        className={props.card.isChecked ? "card-checked" : "card"}
      >
        <CardHeader
          id={props.id}
          editMode={props.editMode}
          checked={props.isChecked}
          cardHead={props.card.Name}
          tempHead={cardTempState.Name}
          onChange={(event) => inputChangedHandler(event, "Name")}
          onSave={() =>
            dispatch(actions.saveChanges(cards, props.id, cardTempState))
          }
          onCancel={() => dispatch(actions.cancelChanges(cards, props.id))}
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

export default withLoadingDelay(card, "card-size");
