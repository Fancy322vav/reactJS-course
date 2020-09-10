import React, { useState } from "react";
import "./index.css";

const card = (props) => {
  const [cardState, setCardState] = useState({ isChecked: false });

  const cardCheckedHandler = () => {
    setCardState({ isChecked: !cardState.isChecked });
  };

  return (
    <div className={cardState.isChecked ? "card-checked" : "card"}>
      <div className="card-header">
        {props.header}
        <input type="checkbox" onChange={cardCheckedHandler} />
      </div>
      <div className="card-text">{props.children}</div>
    </div>
  );
};

export default card;
