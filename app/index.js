import "./reset.scss";
import "./global.scss";

import React from "react";
import { render } from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from "react-router";

import App from "./containers/App";
import Home from "./containers/Home";

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>,
  document.getElementById("app")
);
