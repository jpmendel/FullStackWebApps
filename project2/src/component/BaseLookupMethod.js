import React from "react";
import Constants from "../data/Constants.js";

class BaseLookupMethod extends React.Component {
  // Gets the upcoming semester to get courses for.
  getLookupSemester() {
    const date = new Date();
    return (date.getMonth() < 7) ? "Fall" : "Spring";
  }

  // Gets the upcoming year to get courses for.
  getLookupYear() {
    const date = new Date();
    if (date.getMonth() < 7) {
      return date.getFullYear();
    } else {
      return date.getFullYear() + 1;
    }
  }

  // Get courses from the server using a specified query.
  getCoursesByQuery(query) {
    const semester = this.getLookupSemester();
    const year = this.getLookupYear();
    return fetch(Constants.SERVER_URL + "q?" + query + `&Semester=${semester}&Year=${year}&limit=1000`)
      .then((response) => response.json());
  }

  // Get courses from the server using a courseID (ex. CSCI 204).
  getCourseByID(courseID) {
    const semester = this.getLookupSemester();
    const year = this.getLookupYear();
    const department = courseID.slice(0, 4).toUpperCase();
    const courseNum = courseID.substring(4).trim().toUpperCase();
    const query = `Department=${department}&CrseNum=${courseNum}&Semester=${semester}&Year=${year}&limit=100`;
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
