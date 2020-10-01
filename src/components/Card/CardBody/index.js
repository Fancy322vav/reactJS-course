import React from "react";
import "./index.css";

const cardBody = (props) => {
  return (
    <div className="card-body">
      {!props.editMode ? (
        <p>{props.cardBody}</p>
      ) : (
        <input type="text" value={props.tempBody} onChange={props.onChange} />
      )}
    </div>
  );
};

export default cardBody;
