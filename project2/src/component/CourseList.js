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
      selectedMeetingTimesWithRooms: "",
      lastCopiedCRN: "C00000"
    }
  }

  // Creates JSX object of CourseCards based on the list of courses passed in.
  createCourseContent() {
    if (this.props.courseData !== null) {
      if (this.props.courseData === "invalid") {
        // If no data, display invalid message.
        return (
          <Row key={"invalid"}>
            <div className="text-center mt-5 w-100" key="none">Please enter something to search.</div>
          </Row>
        );
      } else if (this.props.courseData === "none") {
        // If no courses found, display none message.
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
          // Build a unique key for use with CSS transitions.
          courseListKey += course.Course;
          // Add a column for each course being created.
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

  onToggleModal(course, meetingTimesWithRooms) {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      selectedCourse: course,
      selectedMeetingTimesWithRooms: meetingTimesWithRooms
    });
  }

  onCopyCRN(crn) {
    this.setState({ lastCopiedCRN: crn });
  }

  render() {
    const courseContent = this.createCourseContent();
    return (
      <div className="pt-4">
        <ReactCSSTransitionGroup
          transitionName="course_list_fade"
          transitionEnter={true}
          transitionEnterTimeout={500}
          transitionLeave={false}
          transitionLeaveTimeout={500}>
          {courseContent}
        </ReactCSSTransitionGroup>
        <CourseDetailModal
          course={this.state.selectedCourse}
          meetingTimesWithRooms={this.state.selectedMeetingTimesWithRooms}
          isOpen={this.state.isModalOpen}
          toggle={this.onToggleModal}/>
      </div>
    );
  }
}

export default CourseList;
