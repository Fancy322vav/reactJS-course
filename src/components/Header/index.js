import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const header = () => {
  return (
    <header className="header">
      <h2>Cards Manager</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/signin" activeClassName="active">
              Sign In
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
