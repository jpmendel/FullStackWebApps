import React from "react";
import ReactDOM from "react-dom";
import CourseLookup from "./component/CourseLookup.js";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <CourseLookup/>,
  document.getElementById("root")
);
registerServiceWorker();
