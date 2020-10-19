import React from "react";
import Auxiliary from "../../../hoc/Auxiliary";
import Backdrop from "../Backdrop";
import "./index.css";

const modal = (props) => (
  <Auxiliary>
    <Backdrop show={props.show} onClose={props.onClose} />
    <div
      className="Modal"
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </Auxiliary>
);

export default modal;
