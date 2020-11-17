import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import * as actions from "../../redux/actions/actions";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { isAdmin } from "../../utility/isAdminCheck";

const header = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch(actions.logoutUser());
    history.push("/signin");
  };

  return (
    <header className="header">
      <h2>Cards Manager</h2>
      <h5 style={{ textAlign: "center" }}>
        {user ? `Приветствую, ${JSON.parse(user).email}` : null}
      </h5>
      <nav>
        <ul>
          <li>
            {user ? (
              <button className="btn btn-secondary" onClick={logout}>
                Logout
              </button>
            ) : (
              <NavLink to="/signin" activeClassName="active">
                Sign In
              </NavLink>
            )}
          </li>
          {isAdmin() ? (
            <NavLink
              style={{ marginRight: "10px" }}
              to="/settings"
              activeClassName="active"
            >
              Settings
            </NavLink>
          ) : null}
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
