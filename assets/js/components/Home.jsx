import React from 'react';
import { Row, Col } from 'reactstrap';

// Renders the home page
export default function Home(props) {
  return (
    <div id="home">
      <img src="/images/me.jpg" alt="Picture of Myself" />
      <Row id="home-btns">
        <Col md="4">
          <i className="fas fa-book"></i>
          <p>Coursework</p>
        </Col>
        <Col md="4">
          <i className="fas fa-lightbulb"></i>
          <p>Personal Projects</p>
        </Col>
        <Col md="4">
          <i class="fas fa-envelope"></i>
          <p>Contact</p>
        </Col>
      </Row>
    </div>
  );
}
