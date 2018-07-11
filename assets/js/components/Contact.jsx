import React from 'react';
import { Row, Col } from 'reactstrap';

/* Renders the contact page */
export default function Contact(props) {
  return (
      <Row id="contact">
        <Col md="12">
          <a href="mailto:nguyen.kp96@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://github.com/kimberlypn">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/kimberlypn/">
            <i class="fab fa-linkedin"></i>
          </a>
        </Col>
      </Row>
  );
}
