import React, { useState, useEffect } from "react";
import { BsPencil, BsCheck, BsX } from "react-icons/bs";
import "./index.css";

const card = (props) => {
  const [cardState, setCardState] = useState({
    isChecked: false,
    isEditMode: false,
    cardData: {
      header: props.head,
      body: props.body,
    },
    tempCardData: {
      header: props.head,
      body: props.body,
    },
  });

  useEffect(() => {
    cancelChanges();
  }, [props.viewMode]);

  const cardCheckedHandler = () => {
    setCardState({
      ...cardState,
      isChecked: !cardState.isChecked,
    });
  };

  const inputChangedHandler = (event, property) => {
    setCardState({
      ...cardState,
      tempCardData: {
        ...cardState.tempCardData,
        [property]: event.target.value,
      },
    });
  };

  const editModeEnabled = () => {
    setCardState({
      ...cardState,
      isChecked: false,
      isEditMode: true,
    });
  };

  const saveChanges = () => {
    setCardState({
      ...cardState,
      isEditMode: false,
      cardData: {
        ...cardState.tempCardData,
      },
    });
  };

  const cancelChanges = () => {
    setCardState({
      ...cardState,
      isEditMode: false,
      tempCardData: {
        ...cardState.cardData,
      },
    });
  };

  let pencil = null;
  if (!props.viewMode) {
    pencil = <BsPencil className="right" onClick={editModeEnabled} />;
  }

  return (
    <div className={cardState.isChecked ? "card-checked" : "card"}>
      <div className="card-header">
        {!cardState.isEditMode ? (
          <div>
            <p className="header-text">{cardState.cardData.header}</p>
            <input
              className="right"
              id="check"
              type="checkbox"
              onChange={cardCheckedHandler}
              checked={cardState.isChecked}
            />
            {pencil}
          </div>
        ) : (
          <div>
            <input
              type="text"
              className="updated-header"
              value={cardState.tempCardData.header}
              onChange={(event) => inputChangedHandler(event, "header")}
            />
            <BsX className="right" onClick={cancelChanges} />
            <BsCheck className="right" onClick={saveChanges} />
          </div>
        )}
      </div>
      <div className="card-text">
        {!cardState.isEditMode ? (
          <p>{cardState.cardData.body}</p>
        ) : (
          <input
            type="text"
            value={cardState.tempCardData.body}
            onChange={(event) => inputChangedHandler(event, "body")}
          />
        )}
      </div>
    </div>
  );
};

export default card;
