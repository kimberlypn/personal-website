import React from 'react';
import { Row, Col } from 'reactstrap';

import Header from './Header';

// Renders the "Contact" section
export default function Contact(props) {
  return (
    <div className="container-fluid section" id="contact">
      <Header text="Contact" icon={<i className="fas fa-envelope"></i>} />
      <Row>
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
    </div>
  );
}
