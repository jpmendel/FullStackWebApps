import React from "react";
import Constants from "../data/Constants.js";

class BaseLookupMethod extends React.Component {
  getCoursesByQuery(query, callback) {
    fetch(Constants.SERVER_URL + "q?" + query)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          if (callback) {
            callback(data.message);
          }
        }
      });
  }

  getCourseByID(courseID) {
    let department = courseID.slice(0, 4).toUpperCase();
    let courseNum = courseID.substring(4).trim().toUpperCase();
    let query = `Department=${department}&CrseNum=${courseNum}`;
    return fetch(Constants.SERVER_URL + "q?" + query)
             .then((response) => response.json())
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default BaseLookupMethod;
