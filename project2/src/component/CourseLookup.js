import React from "react";
import {Button} from "reactstrap";
import Scroll from "react-scroll";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import ArrowUpwardIcon from "material-ui-icons/ArrowUpward";
import NavigationMenu from "./NavigationMenu.js";
import LookupByCourseTitle from "./LookupByCourseTitle.js";
import LookupByDepartment from "./LookupByDepartment.js";
import LookupByRequirement from "./LookupByRequirement.js";
import LookupByMajor from "./LookupByMajor.js";

class CourseLookup extends React.Component {
  constructor(props) {
    super(props);
    this.onWindowScrolled = this.onWindowScrolled.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.changeLookupType = this.changeLookupType.bind(this);
    this.state = {
      lookupType: "0",
      shouldShowScrollTopButton: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onWindowScrolled)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onWindowScrolled)
  }

  onWindowScrolled(event) {
    this.setState({ shouldShowScrollTopButton: (window.scrollY > 50) });
  }

  scrollToTop() {
    Scroll.animateScroll.scrollToTop();
  }

  changeLookupType(type) {
    this.setState({ lookupType: type });
  }

  render() {
    let lookupMethod = null;
    if (this.state.lookupType === "0") {
      lookupMethod = <LookupByCourseTitle key={0}/>;
    } else if (this.state.lookupType === "1") {
      lookupMethod = <LookupByDepartment key={1}/>;
    } else if (this.state.lookupType === "2") {
      lookupMethod = <LookupByRequirement key={2}/>;
    } else if (this.state.lookupType === "3") {
      lookupMethod = <LookupByMajor key={3}/>;
    }
    let scrollContainerClass = "";
    if (this.state.shouldShowScrollTopButton) {
      scrollContainerClass = "course_lookup-scroll_top_container course_lookup-scroll_top_container_fade_in";
    } else {
      scrollContainerClass = "course_lookup-scroll_top_container";
    }
    return (
      <div>
        <NavigationMenu onTabSelected={this.changeLookupType}/>
        <ReactCSSTransitionGroup
          transitionName="course_lookup_fade"
          transitionEnter={true}
          transitionEnterTimeout={500}
          transitionLeave={false}
          transitionLeaveTimeout={500}>
          {lookupMethod}
        </ReactCSSTransitionGroup>
        <div className={scrollContainerClass}>
          <Button
            className="course_lookup-scroll_top_button"
            onClick={this.scrollToTop}>
            <ArrowUpwardIcon className="course_lookup-arrow_up_icon"/>
          </Button>
        </div>
      </div>
    );
  }
}

export default CourseLookup;
