import React from "react";
import Header from "../Header";
import { Switch, Route } from "react-router-dom";
import SignIn from "../../containers/SignInData";
import App from "../../containers/App";
import CardContextProvider from "../../context/CardContext";

const layout = () => {
  return (
    <CardContextProvider>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/cards" component={App} />
          <Route
            render={() => (
              <h1 style={{ textAlign: "center" }}>Page not found</h1>
            )}
          />
        </Switch>
      </div>
    </CardContextProvider>
  );
};

export default layout;
