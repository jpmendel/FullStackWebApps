import React from "react";
import {Row, Col} from "reactstrap";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import CourseCard from "./CourseCard.js";

class CourseList extends React.Component {
  createCourseContent() {
    if (this.props.courseData !== null) {
      if (this.props.courseData === "invalid") {
        return (
          <Row key={"invalid"}>
            <div className="text-center mt-5 w-100" key="none">Please enter valid input.</div>
          </Row>
        );
      } else if (this.props.courseData === "none") {
        return (
          <Row key={"none"}>
            <div className="text-center mt-5 w-100" key="none">No courses found!</div>
          </Row>
        );
      } else {
        let courseListContent = [];
        let courseRow = [];
        let courseRowKey = "";
        let numberOfCourses = 0;
        if (this.props.amountLoaded < this.props.courseData.length) {
          numberOfCourses = this.props.amountLoaded;
        } else {
          numberOfCourses = this.props.courseData.length;
        }
        for (let i = 0; i < numberOfCourses; i++) {
          const courseItem = this.props.courseData[i];
          courseRow.push(courseItem);
          courseRowKey += courseItem.Course;
          if (courseRow.length === 4 || i === numberOfCourses - 1) {
            courseListContent.push(
              <Row key={courseRowKey}>
                {courseRow.map((course, j) => (
                  <Col className="my-3" xs={12} sm={6} md={4} lg={3}
                    key={course.Course + " " + j}>
                    <CourseCard course={course}/>
                  </Col>
                ))}
              </Row>
            );
            courseRow = [];
            courseRowKey = "";
          }
        }
        return courseListContent;
      }
    }
    return null;
  }

  render() {
    const courses = this.createCourseContent();
    return (
      <div className="pt-4">
        <ReactCSSTransitionGroup
          transitionName="course_list_fade"
          transitionEnter={true}
          transitionEnterTimeout={500}
          transitionLeave={false}
          transitionLeaveTimeout={500}>
          {courses}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default CourseList;
