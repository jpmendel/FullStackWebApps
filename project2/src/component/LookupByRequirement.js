import React from "react";
import {Form, Label, Input, Button} from "reactstrap";
import CourseLayout from "./CourseLayout.js";

class LookupByRequirement extends React.Component {
  constructor(props) {
    super(props);
    this.handleCourseReqChange = this.handleCourseReqChange.bind(this);
    this.handleCourseReqSubmit = this.handleCourseReqSubmit.bind(this);
    this.state = {
      courseReq: "",
      courseData: null
    };
  }

  handleCourseReqChange(event) {
    this.setState({ courseReq: event.target.value });
  }

  handleCourseReqSubmit(event) {
    event.preventDefault();
    if (this.state.courseReq) {
      fetch(`http://eg.bucknell.edu:48484/q?CCCReq=${this.state.courseReq}&limit=1000`)
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            if (data.message.length > 0) {
              this.setState({ courseData: data.message });
            } else {
              this.setState({ courseData: "none" });
            }
          }
        });
    } else {
      if (this.state.courseData === null) {
        this.setState({ courseData: "invalid" });
      }
    }
  }

  render() {
    let buttonColor = this.state.courseReq ? "primary" : "secondary";
    return (
      <div className="p-4">
        <Form onSubmit={this.handleCourseReqSubmit} inline>
          <Label for="ccc_entry">Enter a CCC requirement:</Label>
          <Input id="ccc_entry" className="ml-3" value={this.state.courseReq}
            placeholder="Enter CCC" onChange={this.handleCourseReqChange}/>
          <Button className="ml-3" color={buttonColor} onClick={this.handleCourseReqSubmit}>Submit</Button>
        </Form>
        <CourseLayout courseData={this.state.courseData}/>
      </div>
    );
  }
}

export default LookupByRequirement;
