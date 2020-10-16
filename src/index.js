import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Pages/App";
import * as serviceWorker from "./serviceWorker";
import { HashRouter, Route } from "react-router-dom";
import Prices from "./Pages/Prices.js";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <div>
        <Route exact path="/prices" component={Prices} />
        <Route exact path="/" component={App} />
      </div>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
