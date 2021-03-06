import React from "react";
import {Navbar, Nav, NavItem, NavLink, NavbarToggler, Collapse} from "reactstrap";

class NavigationMenu extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggleTab = this.toggleTab.bind(this);
    this.state = {
      isNavbarOpen: false,
      activeTab: "0"
    };
  }

  toggleNavbar() {
    this.setState({ isNavbarOpen: !this.state.isNavbarOpen });
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
      this.props.onTabSelected(tab);
    }
    if (this.state.isNavbarOpen) {
      this.setState({ isNavbarOpen: false });
    }
  }

  render() {
    return (
      <div className="nav_menu-header">
        <h1 className="nav_menu-title_label text-center text-sm-left p-4">Bucknell Course Lookup</h1>
        <Navbar className="nav_menu-nav_bar pt-0 pb-2 pb-md-0" expand="md" dark>
          <NavbarToggler className="nav_menu-toggle_button" onClick={this.toggleNavbar}/>
          <Collapse isOpen={this.state.isNavbarOpen} navbar>
            <Nav className="nav_menu-tab_menu nav-tabs">
              <NavItem className="nav_menu-tab_item text-center col-xs-12 col-sm-6 col-lg-3">
                <NavLink
                  className="nav_menu-tab_link" active={this.state.activeTab === "0"}
                  onClick={() => this.toggleTab("0")}>
                  Lookup by Course Title
                </NavLink>
              </NavItem>
              <NavItem className="nav_menu-tab_item text-center col-xs-12 col-sm-6 col-lg-3">
                <NavLink
                  className="nav_menu-tab_link" active={this.state.activeTab === "1"}
                  onClick={() => this.toggleTab("1")}>
                  Lookup by Department
                </NavLink>
              </NavItem>
              <NavItem className="nav_menu-tab_item text-center col-xs-12 col-sm-6 col-lg-3">
                <NavLink
                  className="nav_menu-tab_link" active={this.state.activeTab === "2"}
                  onClick={() => this.toggleTab("2")}>
                  Lookup by CCC Req
                </NavLink>
              </NavItem>
              <NavItem className="nav_menu-tab_item text-center col-xs-12 col-sm-6 col-lg-3">
                <NavLink
                  className="nav_menu-tab_link" active={this.state.activeTab === "3"}
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
