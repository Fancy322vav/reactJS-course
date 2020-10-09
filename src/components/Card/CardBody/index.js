import React from "react";
import PropTypes from "prop-types";
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

cardBody.propTypes = {
  editMode: PropTypes.bool,
  cardBody: PropTypes.string,
  tempBody: PropTypes.string,
  onChange: PropTypes.func,
};

export default cardBody;
