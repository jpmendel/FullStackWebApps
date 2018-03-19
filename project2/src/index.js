import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import CourseLookup from "./component/CourseLookup.js";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={CourseLookup}/>
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
