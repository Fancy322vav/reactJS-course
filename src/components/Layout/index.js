import React, { useEffect } from "react";
import Header from "../Header";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import SignIn from "../../containers/SignInData";
import App from "../../containers/App";
import CardId from "../CardId";
import Settings from "../Settings";
import * as actions from "../../redux/actions/actions";
import { isAdmin } from "../../utility/isAdminCheck";

let id = null;

const layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.initCards());
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/signin" component={SignIn} />
          <Route path={"/card/:" + id} component={CardId} />
          {isAdmin() ? <Route path="/settings" component={Settings} /> : null}
          <Route
            render={() => (
              <h1 style={{ textAlign: "center" }}>Page not found</h1>
            )}
          />
        </Switch>
      </Switch>
    </div>
  );
};

export default layout;
