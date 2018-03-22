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
      courseData: null
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
      this.findRequiredCourses();
    } else {
      if (this.state.courseData === null) {
        this.setState({ courseData: "invalid" });
      }
    }
  }

  findRequiredCourses() {
    let courseQueryList = [];
    if (this.state.major === "Computer Science and Engineering") {
      if (this.state.classYear === "Any" || this.state.classYear === "First Year") {
        for (let course of Constants.COMPUTER_SCIENCE_MAJOR.FIRST_YEAR_COURSES) {
          courseQueryList.push(this.getCourseByID(course));
        }
      }
      if (this.state.classYear === "Any" || this.state.classYear === "Sophomore") {
        for (let course of Constants.COMPUTER_SCIENCE_MAJOR.SOPHOMORE_COURSES) {
          courseQueryList.push(this.getCourseByID(course));
        }
      }
      if (this.state.classYear === "Any" || this.state.classYear === "Junior") {
        for (let course of Constants.COMPUTER_SCIENCE_MAJOR.JUNIOR_COURSES) {
          courseQueryList.push(this.getCourseByID(course));
        }
      }
      if (this.state.classYear === "Any" || this.state.classYear === "Senior") {
        for (let course of Constants.COMPUTER_SCIENCE_MAJOR.SENIOR_COURSES) {
          courseQueryList.push(this.getCourseByID(course));
        }
      }
    } else if (this.state.major === "Computer Engineering") {

    } else if (this.state.major === "Electrical Engineering") {

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
    let buttonColor = (this.state.major && this.state.classYear) ? "primary" : "secondary";
    return (
      <div className="p-4">
        <Form onSubmit={this.handleMajorSubmit} inline>
          <Label for="major_entry" className="ml-3">Select your major:</Label>
          <Input id="major_entry" className="ml-3" type="select" value={this.state.major}
            onChange={this.handleMajorChange}>
            <option>Computer Engineering</option>
            <option>Computer Science and Engineering</option>
            <option>Electrical Engineering</option>
          </Input>
          <Label for="class_year_entry" className="ml-3">and your class year:</Label>
          <Input id="class_year_entry" className="ml-3" type="select" value={this.state.classYear}
            onChange={this.handleClassYearChange}>
            <option>Any</option>
            <option>First Year</option>
            <option>Sophomore</option>
            <option>Junior</option>
            <option>Senior</option>
          </Input>
          <Button className="ml-3" color={buttonColor} onClick={this.handleMajorSubmit}>Find Courses</Button>
        </Form>
        <CourseList courseData={this.state.courseData}/>
      </div>
    );
  }
}

export default LookupByMajor;
