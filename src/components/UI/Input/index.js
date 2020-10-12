import React from "react";
import "./index.css";

const input = (props) => {
  const classes = ["form-control"];
  if (props.valid && props.touched) {
    classes.push("invalid");
  }
  return (
    <div className="input-group input-group-sm mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          {props.label}
        </span>
      </div>
      <input
        type={props.elType}
        {...props.elConfig}
        value={props.value}
        onChange={props.changed}
        className={classes.join(" ")}
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
      />
    </div>
  );
};

export default input;
