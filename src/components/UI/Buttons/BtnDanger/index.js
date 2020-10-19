import React from "react";
import "./index.css";

const btnDanger = (props) => (
  <button
    className={"Danger"}
    style={props.size}
    onClick={props.onDanger}
    disabled={props.isDisabled}
  >
    {props.children}
  </button>
);

export default btnDanger;
