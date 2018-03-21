import React from "react";
import {Row, Col} from "reactstrap";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import CourseCard from "./CourseCard.js";

import "../style/CourseLayout.css";

class CourseLayout extends React.Component {
  render() {
    let courseListKey = "";
    let courseContent = null;
    if (this.props.courseData !== null) {
      if (this.props.courseData === "invalid") {
        courseListKey = "invalid";
        courseContent = (
          <div className="text-center mt-5 w-100" key="none">Please enter valid input.</div>
        );
      } else if (this.props.courseData === "none") {
        courseListKey = "none";
        courseContent = (
          <div className="text-center mt-5 w-100" key="none">No courses found!</div>
        );
      } else {
        courseContent = this.props.courseData
          .map((course, i) => {
            courseListKey += course.CrseNum;
            return (
              <Col className="my-3" xs={12} sm={6} md={4} lg={3} key={i}>
                <CourseCard course={course}/>
              </Col>
            );
          });
      }
    }
    return (
      <div className="pt-4">
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnter={true}
          transitionEnterTimeout={500}
          transitionLeave={false}
          transitionLeaveTimeout={500}>
          <Row key={courseListKey}>
            {courseContent}
          </Row>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default CourseLayout;
