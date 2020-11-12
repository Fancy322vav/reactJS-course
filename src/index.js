import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Layout from "./components/Layout";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./redux/reducers/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = () => {
  return (next) => {
    return (action) => {
      console.log("[Middleware] Dispatching", action);
      const result = next(action);
      return result;
    };
  };
};

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
