import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Layout from "./components/Layout";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
