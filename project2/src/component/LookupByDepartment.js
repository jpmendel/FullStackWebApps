import React from "react";
import {Form, Label, Input, Button} from "reactstrap";
import BaseLookupMethod from "./BaseLookupMethod.js";
import CourseList from "./CourseList.js";

import Constants from "../data/Constants.js";

class LookupByDepartment extends BaseLookupMethod {
  constructor(props) {
    super(props);
    this.onDepartmentChange = this.onDepartmentChange.bind(this);
    this.onDepartmentSubmit = this.onDepartmentSubmit.bind(this);
    this.state = {
      department: "",
      courseData: null,
      lastSearch: ""
    };
  }

  onDepartmentChange(event) {
    this.setState({ department: event.target.value });
  }

  onDepartmentSubmit(event) {
    event.preventDefault();
    if (this.state.department) {
      if (this.state.department !== this.state.lastSearch) {
        this.setState({ lastSearch: this.state.department });
        this.props.resetAmountLoaded();
        this.loadCoursesBySearching(this.state.department.slice(0, 4));
      }
    } else {
      if (this.state.courseData === null) {
        this.setState({ courseData: "invalid" });
      }
    }
  }

  loadCoursesBySearching(department) {
    const query = `Department=${department.toUpperCase()}`;
    this.getCoursesByQuery(query)
      .then((data) => {
        if (data.message.length > 0) {
          this.setState({ courseData: data.message });
        } else {
          this.setState({ courseData: "none" });
        }
      });
  }

  render() {
    const buttonColor = this.state.department ? "primary" : "secondary";
    const departments = Constants.DEPARTMENTS.map((dept, i) => <option key={i}>{dept}</option>);
    return (
      <div className="p-4">
        <Form className="base_lookup-form" onSubmit={this.onDepartmentSubmit} inline>
          <Label for="dept_entry" className="text-center">Enter a department:</Label>
          <Input id="dept_entry" className="ml-sm-3 mt-2 mt-sm-0" type="select" value={this.state.department}
            placeholder="Enter department" onChange={this.onDepartmentChange}>
            {departments}
          </Input>
          <Button
            className="ml-sm-3 mt-3 mt-sm-0" color={buttonColor}
            onClick={this.onDepartmentSubmit}>
            Find Courses
          </Button>
        </Form>
        <CourseList courseData={this.state.courseData} amountLoaded={this.props.amountLoaded}/>
      </div>
    );
  }
}

export default LookupByDepartment;
