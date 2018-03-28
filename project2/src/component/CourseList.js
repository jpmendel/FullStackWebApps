import React from "react";
import {Row, Col} from "reactstrap";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import CourseCard from "./CourseCard.js";
import CourseDetailModal from "./CourseDetailModal.js";

class CourseList extends React.Component {
  constructor(props) {
    super(props);
    this.onToggleModal = this.onToggleModal.bind(this);
    this.onCopyCRN = this.onCopyCRN.bind(this);
    this.state = {
      isModalOpen: false,
      selectedCourse: null,
      lastCopiedCRN: "C00000"
    }
  }

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
        let courseList = [];
        let courseListKey = "";
        for (let i = 0; i < this.props.courseData.length; i++) {
          const course = this.props.courseData[i];
          courseListKey += course.Course;
          courseList.push(
            <Col className="my-3" xs={12} sm={6} md={4} xl={3} key={course.Course + " " + i}>
              <CourseCard
                course={course} onViewDetail={this.onToggleModal}
                lastCopiedCRN={this.state.lastCopiedCRN} onCopyCRN={this.onCopyCRN}/>
            </Col>
          );
        }
        const courseListContent = (
          <Row key={courseListKey}>
            {courseList}
          </Row>
        );
        return courseListContent;
      }
    }
    return null;
  }

  onToggleModal(course) {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      selectedCourse: course
    });
  }

  onCopyCRN(crn) {
    this.setState({ lastCopiedCRN: crn });
  }

  render() {
    const courses = this.createCourseContent();
    return (
      <div className="pt-4">
        <CourseDetailModal course={this.state.selectedCourse} isOpen={this.state.isModalOpen} toggle={this.onToggleModal}/>
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
