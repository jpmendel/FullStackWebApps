import React from "react";
import ReactDOM from "react-dom";
import CourseLookup from "./component/CourseLookup.js";
import registerServiceWorker from "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import "./style/CourseLookup.css";
import "./style/NavigationMenu.css";
import "./style/CourseList.css";
import "./style/CourseCard.css";

ReactDOM.render(
  <CourseLookup/>,
  document.getElementById("root")
);
registerServiceWorker();
