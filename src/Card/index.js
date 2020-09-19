import React, { useState } from "react";
import { BsPencil, BsCheck, BsX } from "react-icons/bs";
import "./index.css";

const card = () => {
  const [cardState, setCardState] = useState({
    isChecked: false,
    isEditMode: false,
    cardData: {
      header: "Card 1",
      body: "Some random text",
    },
    tempCardData: {
      header: "Card 1",
      body: "Some random text",
    },
  });

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

  return (
    <div className={cardState.isChecked ? "card-checked" : "card"}>
      <div className="card-header">
        {!cardState.isEditMode ? (
          <div>
            <p>{cardState.cardData.header}</p>
            <BsPencil onClick={editModeEnabled} />
            <input
              id="check"
              type="checkbox"
              onChange={cardCheckedHandler}
              checked={cardState.isChecked}
            />
          </div>
        ) : (
          <div>
            <input
              type="text"
              className="updated-header"
              value={cardState.tempCardData.header}
              onChange={(event) => inputChangedHandler(event, "header")}
            />
            <BsCheck className="right" onClick={saveChanges} />
            <BsX className="right" onClick={cancelChanges} />
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
