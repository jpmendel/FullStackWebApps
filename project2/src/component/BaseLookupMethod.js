import React from "react";
import Constants from "../data/Constants.js";

class BaseLookupMethod extends React.Component {
  getCoursesByQuery(query) {
    return fetch(Constants.SERVER_URL + "q?" + query + "&limit=1000")
      .then((response) => response.json());
  }

  getCourseByID(courseID) {
    const department = courseID.slice(0, 4).toUpperCase();
    const courseNum = courseID.substring(4).trim().toUpperCase();
    const query = `Department=${department}&CrseNum=${courseNum}&limit=16`;
    return fetch(Constants.SERVER_URL + "q?" + query)
      .then((response) => response.json());
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default BaseLookupMethod;
