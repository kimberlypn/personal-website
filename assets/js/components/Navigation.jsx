import React from 'react';
import { Row, Col } from 'reactstrap';

// Renders the navigation bar
export default function Navigation(props) {
  return (
    <Row id="navigation">
      <Col md="3">
        <i className="fas fa-user-circle"></i>
        <p>About</p>
      </Col>
      <Col md="3">
        <i className="fas fa-book"></i>
        <p>Coursework</p>
      </Col>
      <Col md="3">
        <i className="fas fa-lightbulb"></i>
        <p>Personal Projects</p>
      </Col>
      <Col md="3">
        <i className="fas fa-envelope"></i>
        <p>Contact</p>
      </Col>
    </Row>
  );
}
