import React from 'react';
import { Row, Col } from 'reactstrap';

// Renders the home page
export default function Home(props) {
  return (
    <div id="home">
      <Row>
        <Col md="6">
          <div id="tag-line">
            <p>I sleep, and I code things.</p>
            <span id="got-ref">(Yes, that was a Game of Thrones reference.)</span>
          </div>

        </Col>
        <Col md="6">
          <img src="/images/me.JPG" alt="Picture of Myself" />
        </Col>
      </Row>
    </div>
  );
}
