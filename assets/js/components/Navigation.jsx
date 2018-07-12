import React, { Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

/* Renders the navigation bar */
export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Fragment>
        {/* Template adapted from: https://reactstrap.github.io/components/navbar/ */}
        <Navbar light expand="md">
          <NavbarBrand href="/">KIMBERLY NGUYEN</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/projects">PROJECTS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/skills">SKILLS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/experience">EXPERIENCE</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Fragment>
    );
  }
}
