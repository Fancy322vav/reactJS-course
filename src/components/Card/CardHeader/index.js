import React, { useEffect } from "react";
import { BsPencil, BsCheck, BsX } from "react-icons/bs";
import "./index.css";

const cardHeader = (props) => {
  useEffect(() => {
    props.cancel();
  }, [props.view]);

  let pencil = null;
  if (!props.view) {
    pencil = <BsPencil className="right" onClick={props.edit} />;
  }

  return (
    <div className="card-header">
      {!props.editMode ? (
        <div>
          <p className="header-text">{props.cardHead}</p>
          <input
            className="right"
            id="check"
            type="checkbox"
            onChange={props.checkToggle}
            checked={props.checked}
          />
          {pencil}
        </div>
      ) : (
        <div>
          <input
            type="text"
            className="updated-header"
            value={props.tempHead}
            onChange={props.changed}
          />
          <BsX className="right" onClick={props.cancel} />
          <BsCheck className="right" onClick={props.save} />
        </div>
      )}
    </div>
  );
};

export default cardHeader;
