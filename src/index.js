import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Switch, Route } from "react-router-dom";
import SignIn from "./containers/SignInData";
import App from "./containers/App";
import Header from "./components/Header";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import CardContextProvider from "./context/CardContext";

ReactDOM.render(
  <BrowserRouter>
    <CardContextProvider>
      <Header />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/signin" component={SignIn} />
        <Route
          render={() => <h1 style={{ textAlign: "center" }}>Page not found</h1>}
        />
      </Switch>
    </CardContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
