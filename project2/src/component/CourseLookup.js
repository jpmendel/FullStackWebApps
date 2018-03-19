import React from "react";
import NavigationMenu from "./NavigationMenu.js";
import LookupByCourseNumber from "./LookupByCourseNumber.js";
import LookupByRequirement from "./LookupByRequirement.js";
import LookupByDepartment from "./LookupByDepartment.js";
import LookupByMajor from "./LookupByMajor.js";

import "../style/CourseLookup.css";

class CourseLookup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lookupType: "CRN"
    }
  }

  render() {
    let LookupMethod;
    if (this.state.lookupType === "CRN") {
      LookupMethod = LookupByCourseNumber;
    } else if (this.state.lookupType === "CCC") {
      LookupMethod = LookupByRequirement;
    } else if (this.state.lookupType === "DEPT") {
      LookupMethod = LookupByDepartment;
    } else if (this.state.lookupType === "MAJ") {
      LookupMethod = LookupByMajor;
    }
    return (
      <div>
        <NavigationMenu/>
        <LookupMethod className="fade_in"/>
      </div>
    );
  }
}

export default CourseLookup;
