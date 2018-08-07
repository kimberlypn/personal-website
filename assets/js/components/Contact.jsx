import React from 'react';
import { Row, Col } from 'reactstrap';

import IconLink from './IconLink';

/* Renders the contact page */
export default function Contact(props) {
  return (
      <Row id="contact">
        <Col md="12">
          {/* Icon source: https://fontawesome.com/icons/envelope?style=solid */}
          <IconLink title="E-mail" icon="fas fa-envelope"
            link="mailto:nguyen.kp96@gmail.com"/>
          {/* Icon source: https://fontawesome.com/icons/github?style=brands */}
          <IconLink title="GitHub" icon="fab fa-github"
            link="https://github.com/kimberlypn" />
          {/* Icon source: https://fontawesome.com/icons/linkedin?style=brands */}
          <IconLink title="LinkedIn" icon="fab fa-linkedin"
            link="https://www.linkedin.com/in/kimberlypn/" />
        </Col>
      </Row>
  );
}
