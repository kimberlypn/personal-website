import React from 'react';
import { Row, Col } from 'reactstrap';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';

// Renders the navigation bar
export default function Navigation(props) {
  /*
  Adds smooth scrolling between sections;
  SOURCE: https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_ref_js_scrollspy_animate&stacked=h
  */
  $(document).ready(function() {
    $('body').scrollspy({target: ".navbar", offset: 50});
    // Add smooth scrolling on all links inside the navbar
    $(".nav-link").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds
        // it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 500, function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }  // End if
    });
  });

  return (
    <Row>
      <Col md="12">
        <Navbar>
          <Nav>
            <NavItem>
              <NavLink href="#about">
                <i className="fas fa-user-circle"></i>
                <p>About</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#coursework">
                <i className="fas fa-book"></i>
                <p>Coursework</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#projects">
                <i className="fas fa-lightbulb"></i>
                <p>Projects</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">
                <i className="fas fa-envelope"></i>
                <p>Contact</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </Col>
    </Row>
  );
}
