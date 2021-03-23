import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Homepage from "./Pages/Homepage";
import * as serviceWorker from "./serviceWorker";
import { HashRouter, Route } from "react-router-dom";
import AboutMe from "./Pages/AboutMe.js";
import Prices from "./Pages/Prices.js";
import Bridal from "./Pages/Bridal.js";
import Extensions from "./Pages/Extensions.js";
import FAQs from "./Pages/FAQs.js";
import GlobalStyle from "./GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <GlobalStyle />
      <div>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/prices" component={Prices} />
        <Route exact path="/bridal" component={Bridal} />
        <Route exact path="/extensions" component={Extensions} />
        <Route exact path="/faqs" component={FAQs} />
      </div>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
