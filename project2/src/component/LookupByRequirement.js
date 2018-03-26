import React from "react";
import {Form, Label, Input, Button} from "reactstrap";
import BaseLookupMethod from "./BaseLookupMethod.js";
import CourseList from "./CourseList.js";

class LookupByRequirement extends BaseLookupMethod {
  constructor(props) {
    super(props);
    this.onCourseReqChange = this.onCourseReqChange.bind(this);
    this.onCourseReqSubmit = this.onCourseReqSubmit.bind(this);
    this.state = {
      courseReq: "",
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
        this.props.resetAmountLoaded();
        this.loadCoursesBySearching(this.state.courseReq);
      }
    } else {
      if (this.state.courseData === null) {
        this.setState({ courseData: "invalid" });
      }
    }
  }

  loadCoursesBySearching(requirement) {
    const query = `CCCReq=${this.state.courseReq.toUpperCase()}`;
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
    return (
      <div className="p-4">
        <Form className="base_lookup-form" onSubmit={this.onCourseReqSubmit} inline>
          <Label for="ccc_entry" className="text-center">Enter a CCC requirement:</Label>
          <Input id="ccc_entry" className="ml-sm-3 mt-2 mt-sm-0" value={this.state.courseReq}
            placeholder="Enter CCC req" onChange={this.onCourseReqChange}/>
          <Button
            className="ml-sm-3 mt-3 mt-sm-0" color={buttonColor}
            onClick={this.onCourseReqSubmit}>
            Find Courses
          </Button>
        </Form>
        <CourseList courseData={this.state.courseData} amountLoaded={this.props.amountLoaded}/>
      </div>
    );
  }
}

export default LookupByRequirement;
