import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Switch, Route } from "react-router-dom";
import SignIn from "./containers/SignInData";
import App from "./containers/App";
import Header from "./components/Header";
import CardId from "./components/Card/CardId";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./redux/reducers/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

let id = null;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path={"/card/:" + id} component={CardId} />
        <Route
          render={() => <h1 style={{ textAlign: "center" }}>Page not found</h1>}
        />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
