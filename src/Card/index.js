import React, { useState } from "react";
import { BsPencil, BsCheck, BsX } from "react-icons/bs";
import "./index.css";

const card = (props) => {
  const [cardState, setCardState] = useState({
    isChecked: false,
    isEditMode: false,
    cardHeaderMessage: props.header,
    cardMainMessage: props.children,
    updatedHeaderMessage: props.header,
    updatedMainMessage: props.children,
  });

  const cardCheckedHandler = () => {
    setCardState({
      ...cardState,
      isChecked: !cardState.isChecked,
    });
  };

  const headerChangedHandler = (event) => {
    setCardState({
      ...cardState,
      updatedHeaderMessage: event.target.value,
    });
  };

  const mainMessgeChangedHandler = (event) => {
    setCardState({
      ...cardState,
      updatedMainMessage: event.target.value,
    });
  };

  const editModeEnabled = () => {
    setCardState({
      ...cardState,
      isChecked: false,
      isEditMode: true,
    });
    document.getElementById("check").checked = false;
  };

  const saveChanges = () => {
    setCardState({
      ...cardState,
      isEditMode: false,
      cardHeaderMessage: cardState.updatedHeaderMessage,
      cardMainMessage: cardState.updatedMainMessage,
    });
  };

  const cancelChanges = () => {
    setCardState({
      ...cardState,
      isEditMode: false,
      updatedHeaderMessage: cardState.cardHeaderMessage,
      cardMainMessage: cardState.cardMainMessage,
    });
  };

  return (
    <div className={cardState.isChecked ? "card-checked" : "card"}>
      <div className="card-header">
        <p className={cardState.isEditMode ? "dn" : ""}>
          {cardState.cardHeaderMessage}
        </p>
        <BsPencil
          className={cardState.isEditMode ? "dn" : ""}
          onClick={editModeEnabled}
        />
        <input
          id="check"
          type="checkbox"
          className={cardState.isEditMode ? "dn" : ""}
          onChange={cardCheckedHandler}
        />
        <input
          type="text"
          className={cardState.isEditMode ? "updated-header" : "dn"}
          value={cardState.updatedHeaderMessage}
          onChange={headerChangedHandler}
        />
        <BsCheck
          className={cardState.isEditMode ? "right" : "dn"}
          onClick={saveChanges}
        />
        <BsX
          className={cardState.isEditMode ? "right" : "dn"}
          onClick={cancelChanges}
        />
      </div>
      <div className="card-text">
        <p className={cardState.isEditMode ? "dn" : ""}>
          {cardState.cardMainMessage}
        </p>
        <input
          type="text"
          className={cardState.isEditMode ? "" : "dn"}
          value={cardState.updatedMainMessage}
          onChange={mainMessgeChangedHandler}
        />
      </div>
    </div>
  );
};

export default card;
