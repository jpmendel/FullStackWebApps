import React from "react";
import {Row, Col} from "reactstrap";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import CourseCard from "./CourseCard.js";

class CourseList extends React.Component {
  createCourseContentAndKey() {
    let courseListKey = "";
    let courseListContent = null;
    if (this.props.courseData !== null) {
      if (this.props.courseData === "invalid") {
        courseListKey = "invalid";
        courseListContent = (
          <div className="text-center mt-5 w-100" key="none">Please enter valid input.</div>
        );
      } else if (this.props.courseData === "none") {
        courseListKey = "none";
        courseListContent = (
          <div className="text-center mt-5 w-100" key="none">No courses found!</div>
        );
      } else {
        courseListContent = this.props.courseData
          .map((course, i) => {
            courseListKey += course.Department + course.CrseNum;
            return (
              <Col className="my-3" xs={12} sm={6} md={4} lg={3} key={i}>
                <CourseCard course={course}/>
              </Col>
            );
          });
      }
    }
    return { courseListContent: courseListContent, courseListKey: courseListKey };
  }

  render() {
    let courses = this.createCourseContentAndKey();
    return (
      <div className="pt-4">
        <ReactCSSTransitionGroup
          transitionName="course_list_fade"
          transitionEnter={true}
          transitionEnterTimeout={500}
          transitionLeave={false}
          transitionLeaveTimeout={500}>
          <Row key={courses.courseListKey}>
            {courses.courseListContent}
          </Row>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default CourseList;
