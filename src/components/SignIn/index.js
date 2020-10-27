import React from "react";
import "./index.css";

const signIn = () => {
  return (
    <div className="sign_in_container">
      <div className="wrapper">
        <h4>Sign In</h4>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Username
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Введите имя"
          />
        </div>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Password
            </span>
          </div>
          <input
            type="password"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Введите пароль"
          />
        </div>
        <button
          style={{ marginTop: "10px" }}
          type="button"
          className="btn btn-success"
        >
          Войти
        </button>
      </div>
    </div>
  );
};

export default signIn;
