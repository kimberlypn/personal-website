import React from 'react';
import { Row, Col } from 'reactstrap';
import { Card, CardImg } from 'reactstrap';

/* Renders the projects page */
export default function Projects(props) {
  return (
    <div id="projects">
      <Row>
        <Col md="6" className="project-card">
          <img src="/images/shambomon.png" alt="Shambomon" />
          <div className="project-title">
            <p>SHAMBOMON</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
