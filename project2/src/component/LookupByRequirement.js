import React from "react";
import {Form, Label, Input, Button} from "reactstrap";
import BaseLookupMethod from "./BaseLookupMethod.js";
import CourseList from "./CourseList.js";

import Constants from "../data/Constants.js";

class LookupByRequirement extends BaseLookupMethod {
  constructor(props) {
    super(props);
    this.onCourseReqChange = this.onCourseReqChange.bind(this);
    this.onCourseReqSubmit = this.onCourseReqSubmit.bind(this);
    this.state = {
      courseReq: Constants.REQUIREMENTS[0],
      courseData: null,
      lastSearch: ""
    };
  }

  onCourseReqChange(event) {
    this.setState({ courseReq: event.target.value });
  }

  onCourseReqSubmit(event) {
    event.preventDefault();
    if (this.state.courseReq) {
      if (this.state.courseReq !== this.state.lastSearch) {
        this.setState({ lastSearch: this.state.courseReq });
        this.loadCoursesBySearching(this.state.courseReq);
      }
    } else {
      if (this.state.courseData === null) {
        this.setState({ courseData: "invalid" });
      }
    }
  }

  loadCoursesBySearching(requirement) {
    let cccReq = "";
    let i = 0;
    while (requirement.charAt(i).match("[a-zA-Z0-9]")) {
      cccReq += requirement.charAt(i);
      i++;
    }
    const query = `CCCReq=${cccReq.toUpperCase()}`;
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
    const buttonColor = this.state.courseReq ? "primary" : "secondary";
    const requirements = Constants.REQUIREMENTS.map((req, i) => <option key={i}>{req}</option>);
    return (
      <div className="p-4">
        <Form className="base_lookup-form" onSubmit={this.onCourseReqSubmit} inline>
          <Label for="ccc_entry" className="text-center">Enter a CCC requirement:</Label>
          <Input id="ccc_entry" className="ml-sm-3 mt-2 mt-sm-0" type="select"
            value={this.state.courseReq} onChange={this.onCourseReqChange}>
            {requirements}
          </Input>
          <Button
            className="ml-sm-3 mt-3 mt-sm-0" color={buttonColor}
            onClick={this.onCourseReqSubmit}>
            Find Courses
          </Button>
        </Form>
        <CourseList courseData={this.state.courseData}/>
      </div>
    );
  }
}

export default LookupByRequirement;
