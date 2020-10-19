import React from "react";
import "./index.css";

const btnSuccess = (props) => (
  <button
    className={"Success"}
    style={props.size}
    onClick={props.onSuccess}
    disabled={props.isDisabled}
  >
    {props.children}
  </button>
);

export default btnSuccess;
