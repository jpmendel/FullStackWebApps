import React from "react";
import {Form, Label, Input, Button} from "reactstrap";
import BaseLookupMethod from "./BaseLookupMethod.js";
import CourseList from "./CourseList.js";

class LookupByDepartment extends BaseLookupMethod {
  constructor(props) {
    super(props);
    this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
    this.handleDepartmentSubmit = this.handleDepartmentSubmit.bind(this);
    this.state = {
      department: "",
      courseData: null
    };
  }

  handleDepartmentChange(event) {
    this.setState({ department: event.target.value });
  }

  handleDepartmentSubmit(event) {
    event.preventDefault();
    if (this.state.department) {
      let query = `Department=${this.state.department.toUpperCase()}&limit=1000`;
      this.getCoursesByQuery(query)
        .then((data) => {
          if (data.message.length > 0) {
            this.setState({ courseData: data.message });
          } else {
            this.setState({ courseData: "none" });
          }
        });
    } else {
      if (this.state.courseData === null) {
        this.setState({ courseData: "invalid" });
      }
    }
  }

  render() {
    let buttonColor = this.state.department ? "primary" : "secondary";
    return (
      <div className="p-4">
        <Form onSubmit={this.handleDepartmentSubmit} inline>
          <Label for="dept_entry">Enter a department:</Label>
          <Input id="dept_entry" className="ml-3" value={this.state.department}
            placeholder="Enter department" onChange={this.handleDepartmentChange}/>
          <Button className="ml-3" color={buttonColor} onClick={this.handleDepartmentSubmit}>Find Courses</Button>
        </Form>
        <CourseList courseData={this.state.courseData}/>
      </div>
    );
  }
}

export default LookupByDepartment;
