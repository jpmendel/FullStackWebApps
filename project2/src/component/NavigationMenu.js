import React from "react";
import {Nav, NavItem, NavLink} from "reactstrap";
import classnames from "classnames";

import "../style/NavigationMenu.css";

class NavigationMenu extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTab = this.toggleTab.bind(this);

    this.state = {
      activeTab: "0",
    }
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className="header_background">
        <h1 className="title_label py-4 pl-4">Bucknell Course Lookup</h1>
        <Nav className="navigation" tabs>
          <NavItem className="tab_item">
            <NavLink
              className={classnames({ active: this.state.activeTab === "0" })}
              onClick={() => this.toggleTab("0")}>
              Lookup by Course Number
            </NavLink>
          </NavItem>
          <NavItem className="tab_item">
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => this.toggleTab("1")}>
              <a className="tab_text">Lookup by Course Requirement</a>
            </NavLink>
          </NavItem>
          <NavItem className="tab_item">
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => this.toggleTab("2")}>
              Lookup by Department
            </NavLink>
          </NavItem>
          <NavItem className="tab_item">
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => this.toggleTab("3")}>
              Lookup by Major
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default NavigationMenu;
