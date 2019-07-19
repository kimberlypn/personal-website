import React from 'react';
import {Col, Row} from 'reactstrap';
import {IconLink} from '../subcomponents/IconLink';
import './Contact.css';

export const Contact = () => (
  <Row id='contact'>
    <Col md='12'>
      <IconLink title='E-mail' icon='fas fa-envelope' link='mailto:nguyen.kp96@gmail.com'/>
      <IconLink title='GitHub' icon='fab fa-github' link='https://github.com/kimberlypn'/>
      <IconLink title='LinkedIn' icon='fab fa-linkedin' link='https://www.linkedin.com/in/kimberlypn/'/>
    </Col>
  </Row>
);