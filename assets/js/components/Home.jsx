import React from 'react';
import { Row, Col } from 'reactstrap';

// Renders the home page
export default function Home(props) {
  return (
    <div className="container parent" id="home">
      <div className="child">
        <h1>Kimberly Nguyen</h1>
        <Row>
          <img src="/images/me.jpg" alt="Picture of Myself" />
        </Row>
        <Row id="home-btns">
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
      </div>
    </div>
  );
}
