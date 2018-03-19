import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import NavigationMenu from "./component/NavigationMenu.js";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={NavigationMenu}/>
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
