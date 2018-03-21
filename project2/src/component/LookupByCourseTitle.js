import React from "react";
import {Form, Label, Input, Button} from "reactstrap";
import CourseLayout from "./CourseLayout.js";

class LookupByCourseTitle extends React.Component {
  constructor(props) {
    super(props);
    this.handleCourseTitleChange = this.handleCourseTitleChange.bind(this);
    this.handleCourseTitleSubmit = this.handleCourseTitleSubmit.bind(this);
    this.state = {
      courseTitle: "",
      courseData: null
    };
  }

  handleCourseTitleChange(event) {
    this.setState({ courseTitle: event.target.value });
  }

  findCourseID(text) {
    let matchedString = text.match("^\\w*[a-zA-Z]{4}\\s?\\d{3}[a-zA-Z]?\\w*$");
    if (matchedString && matchedString.length > 0 && matchedString[0]) {
      let department = matchedString[0].slice(0, 4).toUpperCase();
      let courseNum = matchedString[0].substring(4).trim().toUpperCase();
      if (department && courseNum) {
        return { department: department, courseNum: courseNum };
      }
    }
    return null;
  }

  filterCourseTitleResults(results, keywords) {
    let filteredResults = [];
    for (let result of results) {
      if (result.Title.includes(keywords)) {
        filteredResults.push(result);
      }
    }
    return filteredResults;
  }

  handleCourseTitleSubmit(event) {
    event.preventDefault();
    if (this.state.courseTitle) {
      let courseID = this.findCourseID(this.state.courseTitle);
      if (courseID !== null) {
        fetch(`http://eg.bucknell.edu:48484/q?Department=${courseID.department}&CrseNum=${courseID.courseNum}&limit=1000`)
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
        fetch(`http://eg.bucknell.edu:48484/q?text=${this.state.courseTitle}&limit=1000`)
          .then((response) => response.json())
          .then((data) => {
            if (data) {
              let filteredResults = this.filterCourseTitleResults(data.message, this.state.courseTitle);
              if (filteredResults.length > 0) {
                this.setState({ courseData: filteredResults });
              } else {
                this.setState({ courseData: "none" });
              }
            }
          });
      }
    } else {
      if (this.state.courseData === null) {
        this.setState({ courseData: "invalid" });
      }
    }
  }

  render() {
    let buttonColor = this.state.courseTitle ? "primary" : "secondary";
    return (
      <div className="p-4">
        <Form onSubmit={this.handleCourseTitleSubmit} inline>
          <Label for="title_entry">Enter a course title:</Label>
          <Input id="title_entry" className="ml-3" value={this.state.courseTitle}
            placeholder="Enter course title" onChange={this.handleCourseTitleChange}
            onKeyPress={this.handleKeyPress}/>
          <Button className="ml-3" color={buttonColor} onClick={this.handleCourseTitleSubmit}>Submit</Button>
        </Form>
        <CourseLayout className="mt-4" courseData={this.state.courseData}/>
      </div>
    );
  }
}

export default LookupByCourseTitle;
