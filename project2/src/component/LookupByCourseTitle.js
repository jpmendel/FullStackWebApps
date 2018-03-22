import React from "react";
import {Form, Label, Input, Button} from "reactstrap";
import BaseLookupMethod from "./BaseLookupMethod.js";
import CourseList from "./CourseList.js";

class LookupByCourseTitle extends BaseLookupMethod {
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

  searchForCourseIDs(text) {
    let regex = new RegExp("[a-zA-Z]{4}\\s?\\d{3}[a-zA-Z]?", "g");
    let matchedResults = text.match(regex);
    if (matchedResults && matchedResults.length > 0 && matchedResults[0]) {
      let courseIDs = []
      for (let matchedString of matchedResults) {
        if (!courseIDs.includes(matchedString)) {
          courseIDs.push(matchedString);
        }
      }
      return courseIDs;
    }
    return null;
  }

  filterCourseTitleResults(results, keywords) {
    let filteredResults = [];
    for (let result of results) {
      if (result.Title.toLowerCase().includes(keywords.toLowerCase())) {
        filteredResults.push(result);
      }
    }
    return filteredResults;
  }

  handleCourseTitleSubmit(event) {
    event.preventDefault();
    if (this.state.courseTitle) {
      let courseIDs = this.searchForCourseIDs(this.state.courseTitle);
      if (courseIDs !== null) {
        let courseQueryList = []
        for (let courseID of courseIDs) {
          courseQueryList.push(this.getCourseByID(courseID));
        }
        Promise.all(courseQueryList)
          .then((results) => {
            let requiredCourses = [];
            for (let result of results) {
              requiredCourses.push(...result.message);
            }
            if (requiredCourses.length > 0) {
              this.setState({ courseData: requiredCourses });
            } else {
               this.setState({ courseData: "none" });
            }
          });
      } else {
        let query = `text=${this.state.courseTitle}&limit=1000`
        this.getCoursesByQuery(query, (data) => {
          let filteredResults = this.filterCourseTitleResults(data, this.state.courseTitle);
          if (filteredResults.length > 0) {
            this.setState({ courseData: filteredResults });
          } else {
            this.setState({ courseData: "none" });
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
          <Button className="ml-3" color={buttonColor} onClick={this.handleCourseTitleSubmit}>Find Courses</Button>
        </Form>
        <CourseList className="mt-4" courseData={this.state.courseData}/>
      </div>
    );
  }
}

export default LookupByCourseTitle;
