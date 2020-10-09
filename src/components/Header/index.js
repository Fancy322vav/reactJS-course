import React, { useContext } from "react";
import { CardContext } from "../../context/CardContext";

const header = () => {
  const { showNumberOfCards } = useContext(CardContext);
  return (
    <header>
      <h3>
        Количество карточек:{" "}
        <span className="badge badge-secondary">{showNumberOfCards()}</span>
      </h3>
    </header>
  );
};

export default header;
