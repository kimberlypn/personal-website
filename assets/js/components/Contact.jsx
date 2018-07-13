import React from 'react';
import { Row, Col } from 'reactstrap';

/* Renders the contact page */
export default function Contact(props) {
  return (
      <Row id="contact">
        <Col md="12">
          <a href="mailto:nguyen.kp96@gmail.com">
            {/* Icon source: https://fontawesome.com/icons/envelope?style=solid */}
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://github.com/kimberlypn">
            {/* Icon source: https://fontawesome.com/icons/github?style=brands */}
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/kimberlypn/">
            {/* Icon source: https://fontawesome.com/icons/linkedin?style=brands */}
            <i className="fab fa-linkedin"></i>
          </a>
        </Col>
      </Row>
  );
}
