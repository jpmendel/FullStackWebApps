import React from "react";
import {Form, Label, Input, Button} from "reactstrap";
import BaseLookupMethod from "./BaseLookupMethod.js";
import CourseList from "./CourseList.js";

import Constants from "../data/Constants.js";

class LookupByMajor extends BaseLookupMethod {
  constructor(props) {
    super(props);
    this.handleMajorChange = this.handleMajorChange.bind(this);
    this.handleClassYearChange = this.handleClassYearChange.bind(this);
    this.handleMajorSubmit = this.handleMajorSubmit.bind(this);
    this.state = {
      major: "Computer Engineering",
      classYear: "Any",
      courses: [],
      courseData: null,
      lastSearch: ""
    };
  }

  handleMajorChange(event) {
    this.setState({ major: event.target.value });
  }

  handleClassYearChange(event) {
    this.setState({ classYear: event.target.value });
  }

  handleMajorSubmit(event) {
    event.preventDefault();
    if (this.state.major && this.state.classYear) {
      if ((this.state.major + this.state.classYear) !== this.state.lastSearch) {
        this.setState({ lastSearch: this.state.major + this.state.classYear });
        this.props.resetAmountLoaded();
        this.loadRequiredCourses();
      }
    } else {
      if (this.state.courseData === null) {
        this.setState({ courseData: "invalid" });
      }
    }
  }

  getCoursesForMajor(major) {
    let courseQueryList = [];
    if (this.state.classYear === "Any" || this.state.classYear === "First Year") {
      for (let course of major.FIRST_YEAR_COURSES) {
        courseQueryList.push(this.getCourseByID(course));
      }
    }
    if (this.state.classYear === "Any" || this.state.classYear === "Sophomore") {
      for (let course of major.SOPHOMORE_COURSES) {
        courseQueryList.push(this.getCourseByID(course));
      }
    }
    if (this.state.classYear === "Any" || this.state.classYear === "Junior") {
      for (let course of major.JUNIOR_COURSES) {
        courseQueryList.push(this.getCourseByID(course));
      }
    }
    if (this.state.classYear === "Any" || this.state.classYear === "Senior") {
      for (let course of major.SENIOR_COURSES) {
        courseQueryList.push(this.getCourseByID(course));
      }
    }
    return courseQueryList;
  }

  loadRequiredCourses() {
    let courseQueryList = [];
    for (let major of Constants.MAJORS) {
      if (this.state.major === major) {
        courseQueryList = this.getCoursesForMajor(Constants.COMPUTER_SCIENCE_MAJOR);
      }
    }
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
    const buttonColor = (this.state.major && this.state.classYear) ? "primary" : "secondary";
    const majors = Constants.MAJORS.map((major, i) => <option key={i}>{major}</option>);
    const classYears = Constants.CLASS_YEARS.map((classYear, i) => <option key={i}>{classYear}</option>);
    return (
      <div className="p-4">
        <Form className="base_lookup-form" onSubmit={this.handleMajorSubmit} inline>
          <Label for="major_entry" className="ml-sm-3 mt-2 mt-sm-0">Select your major:</Label>
          <Input id="major_entry" className="ml-sm-3 mt-3 mt-sm-0" type="select" value={this.state.major}
            onChange={this.handleMajorChange}>
            {majors}
          </Input>
          <Label for="class_year_entry" className="ml-sm-3 mt-3 mt-sm-0">and your class year:</Label>
          <Input id="class_year_entry" className="ml-sm-3 mt-3 mt-sm-0" type="select" value={this.state.classYear}
            onChange={this.handleClassYearChange}>
            {classYears}
          </Input>
          <Button className="ml-sm-3 mt-3 mt-sm-0" color={buttonColor} onClick={this.handleMajorSubmit}>Find Courses</Button>
        </Form>
        <CourseList courseData={this.state.courseData} amountLoaded={this.props.amountLoaded}/>
      </div>
    );
  }
}

export default LookupByMajor;
