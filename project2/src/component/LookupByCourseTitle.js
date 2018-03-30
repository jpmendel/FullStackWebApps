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

  // Searches the input text for any course IDs (ex. CSCI 204).
  searchForCourseIDs(text) {
    // Regular expression to match 4 letters 3 numbers and 1 optional letter.
    const regex = new RegExp("[a-zA-Z]{4}\\s?\\d{3}[a-zA-Z]?", "g");
    // Find matched results in the entered string.
    const matchedResults = text.match(regex);
    if (matchedResults && matchedResults.length > 0 && matchedResults[0]) {
      let courseIDs = []
      for (let matchedString of matchedResults) {
        if (!courseIDs.includes(matchedString)) {
          // Add the matched string with L, P, and R for lab, problem sess, etc.
          courseIDs.push(matchedString);
          courseIDs.push(matchedString + "L");
          courseIDs.push(matchedString + "P");
          courseIDs.push(matchedString + "R");
        }
      }
      return courseIDs;
    }
    return null;
  }

  // Filters the results to get only courses that match all keywords.
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
          // If we find course IDs, search by them.
          this.loadCoursesByID(courseIDs);
        } else {
          // Else, just search for keywords.
          this.loadCoursesBySearching(this.state.courseTitle);
        }
      }
    } else {
      // Nothing entered into the text box.
      if (this.state.courseData === null) {
        this.setState({ courseData: "invalid" });
      }
    }
  }

  // Loads courses by their 4 letter 3 number ID.
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

  // Loads courses by searching for keywords.
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
    // Gray out button if no text is entered in the text box.
    const buttonColor = this.state.courseTitle ? "primary" : "secondary";
    return (
      <div className="p-4">
        <Form className="base_lookup-form" onSubmit={this.onCourseTitleSubmit} inline>
          <Label for="title_entry" className="text-center">
            Enter a course title or course ID (ex. CSCI 204):
          </Label>
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
