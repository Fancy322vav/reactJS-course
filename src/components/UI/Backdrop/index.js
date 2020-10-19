import React from "react";
import "./index.css";

const backdrop = (props) =>
  props.show ? <div className="Backdrop" onClick={props.onClose}></div> : null;

export default backdrop;
