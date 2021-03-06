import React from "react";
import {Form, Label, Input, Button} from "reactstrap";
import BaseLookupMethod from "./BaseLookupMethod.js";
import CourseList from "./CourseList.js";

import Constants from "../data/Constants.js";

class LookupByMajor extends BaseLookupMethod {
  constructor(props) {
    super(props);
    this.onMajorChange = this.onMajorChange.bind(this);
    this.onClassYearChange = this.onClassYearChange.bind(this);
    this.onMajorSubmit = this.onMajorSubmit.bind(this);
    this.state = {
      major: Constants.MAJORS[0].name,
      classYear: Constants.CLASS_YEARS[0],
      courses: [],
      courseData: null,
      lastSearch: ""
    };
  }

  onMajorChange(event) {
    this.setState({ major: event.target.value });
  }

  onClassYearChange(event) {
    this.setState({ classYear: event.target.value });
  }

  onMajorSubmit(event) {
    event.preventDefault();
    if (this.state.major && this.state.classYear) {
      if ((this.state.major + this.state.classYear) !== this.state.lastSearch) {
        this.setState({ lastSearch: this.state.major + this.state.classYear });
        this.loadRequiredCourses();
      }
    } else {
      if (this.state.courseData === null) {
        this.setState({ courseData: "invalid" });
      }
    }
  }

  // Gets a list of course IDs for a certain major as defined in Constants.js.
  getCoursesForMajor(major) {
    let courseQueryList = [];
    let classYearQueryList = [];
    if (this.state.classYear === "Any") {
      classYearQueryList = ["FIRST_YEAR_COURSES", "SOPHOMORE_COURSES", "JUNIOR_COURSES", "SENIOR_COURSES"];
    } else {
      classYearQueryList = [this.state.classYear.toUpperCase().replace(" ", "_") + "_COURSES"];
    }
    for (let courseList of classYearQueryList) {
      for (let course of major[courseList]) {
        // Add course ID with L, P and R to also get lab, problem sess, etc.
        courseQueryList.push(this.getCourseByID(course));
        courseQueryList.push(this.getCourseByID(course + "L"));
        courseQueryList.push(this.getCourseByID(course + "P"));
        courseQueryList.push(this.getCourseByID(course + "R"));
      }
    }
    return courseQueryList;
  }

  // Loads the required courses for a certain major.
  loadRequiredCourses() {
    let courseQueryList = [];
    for (let major of Constants.MAJORS) {
      if (this.state.major === major.name) {
        courseQueryList = this.getCoursesForMajor(major.courses);
      }
    }
    // Wait for all courses to be fetched then set result.
    Promise.all(courseQueryList)
      .then((results) => {
        let requiredCourses = [];
        for (let result of results) {
          requiredCourses.push(...result.message);
        }
        this.setState({ courseData: requiredCourses });
      });
  }

  render() {
    const majors = Constants.MAJORS.map((major, i) => <option key={i}>{major.name}</option>);
    const classYears = Constants.CLASS_YEARS.map((classYear, i) => <option key={i}>{classYear}</option>);
    return (
      <div className="p-4">
        <Form className="base_lookup-form" onSubmit={this.onMajorSubmit} inline>
          <Label for="major_entry" className="mt-2 mt-sm-0">
            Select your major:
          </Label>
          <Input id="major_entry" className="ml-sm-3 mt-3 mt-sm-0" type="select" value={this.state.major}
            onChange={this.onMajorChange}>
            {majors}
          </Input>
          <Label for="class_year_entry" className="ml-sm-3 mt-3 mt-sm-0">
            and your class year:
          </Label>
          <Input id="class_year_entry" className="ml-sm-3 mt-3 mt-sm-0" type="select" value={this.state.classYear}
            onChange={this.onClassYearChange}>
            {classYears}
          </Input>
          <Button className="ml-sm-3 mt-3 mt-sm-0" color="primary" onClick={this.onMajorSubmit}>Find Courses</Button>
        </Form>
        <CourseList courseData={this.state.courseData}/>
      </div>
    );
  }
}

export default LookupByMajor;
