import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import NavigationMenu from "./NavigationMenu.js";
import LookupByCourseTitle from "./LookupByCourseTitle.js";
import LookupByRequirement from "./LookupByRequirement.js";
import LookupByDepartment from "./LookupByDepartment.js";
import LookupByMajor from "./LookupByMajor.js";

class CourseLookup extends React.Component {
  constructor(props) {
    super(props);
    this.changeLookupType = this.changeLookupType.bind(this);
    this.state = {
      lookupType: "0"
    };
  }

  changeLookupType(type) {
    this.setState({ lookupType: type });
  }

  render() {
    let lookupMethod = null;
    if (this.state.lookupType === "0") {
      lookupMethod = <LookupByCourseTitle key={0}/>;
    } else if (this.state.lookupType === "1") {
      lookupMethod = <LookupByRequirement key={1}/>;
    } else if (this.state.lookupType === "2") {
      lookupMethod = <LookupByDepartment key={2}/>;
    } else if (this.state.lookupType === "3") {
      lookupMethod = <LookupByMajor key={3}/>;
    }
    return (
      <div>
        <NavigationMenu changeLookupType={this.changeLookupType}/>
        <ReactCSSTransitionGroup
          transitionName="course_lookup_fade"
          transitionEnter={true}
          transitionEnterTimeout={500}
          transitionLeave={false}
          transitionLeaveTimeout={500}>
          {lookupMethod}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default CourseLookup;
