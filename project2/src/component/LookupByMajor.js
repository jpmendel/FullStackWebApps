import React from "react";
import {Form, Label, Input, Button} from "reactstrap";
import CourseLayout from "./CourseLayout.js";

class LookupByMajor extends React.Component {
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
      fetch(`http://eg.bucknell.edu:48484/q?Department=CSCI&limit=1000`)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.message.length > 0) {
            this.setState({ courses: this.state.courses.concat(data.message) });
          }
          fetch(`http://eg.bucknell.edu:48484/q?Department=ECEG&limit=1000`)
            .then((response) => response.json())
            .then((data) => {
              if (data && data.message.length > 0) {
                this.setState({ courses: this.state.courses.concat(data.message) });
              }
              this.findRequiredCourses();
            });
        });
    } else {
      if (this.state.courseData === null) {
        this.setState({ courseData: "invalid" });
      }
    }
  }

  findRequiredCourses() {
    let requiredCourses = [];
    for (let course of this.state.courses) {
      if (this.state.major === "Computer Science and Engineering") {
        if (this.state.classYear === "Any" || this.state.classYear === "First Year") {
          if (course.Course.includes("CSCI 203")) {
            requiredCourses.push(course);
          }
        }
        if (this.state.classYear === "Any" || this.state.classYear === "Sophomore") {
          if (course.Course.includes("CSCI 204")) {
            requiredCourses.push(course);
          } else if (course.Course.includes("CSCI 205")) {
            requiredCourses.push(course);
          } else if (course.Course.includes("CSCI 206")) {
            requiredCourses.push(course);
          }
        }
      } else if (this.state.major === "Computer Engineering") {

      } else if (this.state.major === "Electrical Engineering") {

      }
    }
    this.setState({ courseData: requiredCourses });
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
        <CourseLayout courseData={this.state.courseData}/>
      </div>
    );
  }
}

export default LookupByMajor;
