import React from "react";
import CardHeader from "../Card/CardHeader";
import CardBody from "../Card/CardBody";
import "./index.css";

const cardList = (props) => {
  const card = props.cards.map((card, index) => {
    return (
      <div className="card-size" key={index}>
        <div className={card.isChecked ? "card-checked" : "card"}>
          <CardHeader
            editMode={card.isEditMode}
            cardHead={card.head}
            checkToggle={() => props.checkToggle(index)}
            checked={card.isChecked}
            tempHead={props.tempCards[index].head}
            changed={(event) => props.changed(event, "head", index)}
            cancel={() => props.cancel(index)}
            save={() => props.save(index)}
            edit={() => props.edit(index)}
            view={props.isOnlyView}
          />
          <CardBody
            editMode={card.isEditMode}
            cardBody={card.body}
            tempBody={props.tempCards[index].body}
            changed={(event) => props.changed(event, "body", index)}
          />
        </div>
      </div>
    );
  });
  return <div className="card-list">{card}</div>;
};

export default cardList;
