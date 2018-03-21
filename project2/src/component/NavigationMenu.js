import React from "react";
import {Navbar, Nav, NavItem, NavLink, NavbarToggler, Collapse} from "reactstrap";
import classnames from "classnames";

import "../style/NavigationMenu.css";

class NavigationMenu extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggleTab = this.toggleTab.bind(this);
    this.state = {
      navbarOpen: false,
      activeTab: "0"
    };
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
      this.props.changeLookupType(tab);
    }
  }

  render() {
    let padNavbar = !this.state.navbarOpen ? "pb-2 pb-md-0" : "";
    return (
      <div id="header_background">
        <h1 id="title_label" className="text-center text-sm-left p-4">Bucknell Course Lookup</h1>
        <Navbar id="nav_bar" className={padNavbar} expand="md" dark>
          <NavbarToggler id="toggle_button" onClick={this.toggleNavbar}/>
          <Collapse isOpen={this.state.navbarOpen} navbar>
            <Nav id="nav_menu" className="nav-tabs">
              <NavItem className="tab_item text-center col-xs-12 col-sm-6 col-lg-3">
                <NavLink
                  className={classnames({ active: this.state.activeTab === "0" })}
                  onClick={() => this.toggleTab("0")}>
                  Lookup by Course Title
                </NavLink>
              </NavItem>
              <NavItem className="tab_item text-center col-xs-12 col-sm-6 col-lg-3">
                <NavLink
                  className={classnames({ active: this.state.activeTab === "1" })}
                  onClick={() => this.toggleTab("1")}>
                  Lookup by CCC Req
                </NavLink>
              </NavItem>
              <NavItem className="tab_item text-center col-xs-12 col-sm-6 col-lg-3">
                <NavLink
                  className={classnames({ active: this.state.activeTab === "2" })}
                  onClick={() => this.toggleTab("2")}>
                  Lookup by Department
                </NavLink>
              </NavItem>
              <NavItem className="tab_item text-center col-xs-12 col-sm-6 col-lg-3">
                <NavLink
                  className={classnames({ active: this.state.activeTab === "3" })}
                  onClick={() => this.toggleTab("3")}>
                  Lookup by Major
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationMenu;
