import React from "react";
import {Form, Label, Input, Button} from "reactstrap";
import BaseLookupMethod from "./BaseLookupMethod.js";
import CourseList from "./CourseList.js";

class LookupByCourseTitle extends BaseLookupMethod {
  constructor(props) {
    super(props);
    this.onCourseTitleChange = this.onCourseTitleChange.bind(this);
    this.onCourseTitleSubmit = this.onCourseTitleSubmit.bind(this);
    this.state = {
      courseTitle: "",
      courseData: null,
      lastSearch: ""
    };
  }

  onCourseTitleChange(event) {
    this.setState({ courseTitle: event.target.value });
  }

  searchForCourseIDs(text) {
    const regex = new RegExp("[a-zA-Z]{4}\\s?\\d{3}[a-zA-Z]?", "g");
    const matchedResults = text.match(regex);
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

  onCourseTitleSubmit(event) {
    event.preventDefault();
    if (this.state.courseTitle) {
      if (this.state.courseTitle !== this.state.lastSearch) {
        this.setState({ lastSearch: this.state.courseTitle });
        const courseIDs = this.searchForCourseIDs(this.state.courseTitle);
        if (courseIDs !== null) {
          this.loadCoursesByID(courseIDs);
        } else {
          this.loadCoursesBySearching(this.state.courseTitle);
        }
      }
    } else {
      if (this.state.courseData === null) {
        this.setState({ courseData: "invalid" });
      }
    }
  }

  loadCoursesByID(courseIDs) {
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
  }

  loadCoursesBySearching(keywords) {
    const query = `text=${keywords}`
    this.getCoursesByQuery(query)
      .then((data) => {
        const filteredResults = this.filterCourseTitleResults(data.message, keywords);
        if (filteredResults.length > 0) {
          this.setState({ courseData: filteredResults });
        } else {
          this.setState({ courseData: "none" });
        }
      });
  }

  render() {
    const buttonColor = this.state.courseTitle ? "primary" : "secondary";
    return (
      <div className="p-4">
        <Form className="base_lookup-form" onSubmit={this.onCourseTitleSubmit} inline>
          <Label for="title_entry" className="text-center">Enter a course title or course ID (ex. CSCI 204):</Label>
          <Input id="title_entry" className="base_lookup-input ml-sm-3 mt-2 mt-sm-0" value={this.state.courseTitle}
            placeholder="Enter course title or ID" onChange={this.onCourseTitleChange}/>
          <Button
            className="ml-sm-3 mt-3 mt-sm-0" color={buttonColor}
            onClick={this.onCourseTitleSubmit}>
            Find Courses
          </Button>
        </Form>
        <CourseList className="mt-4" courseData={this.state.courseData}/>
      </div>
    );
  }
}

export default LookupByCourseTitle;
