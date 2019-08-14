import React from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import './Navigation.css';

export const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Navbar light expand='md'>
      <NavbarBrand href='/'><h1>KIMBERLY NGUYEN</h1></NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)}/>
      <Collapse isOpen={isOpen} navbar>
        <Nav className='ml-auto' navbar>
          <NavItem><NavLink href='/'>ABOUT</NavLink></NavItem>
          <NavItem><NavLink href='/projects'>PROJECTS</NavLink></NavItem>
          <NavItem><NavLink href='/skills'>SKILLS</NavLink></NavItem>
          <NavItem><NavLink href='/experiences'>EXPERIENCES</NavLink></NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};