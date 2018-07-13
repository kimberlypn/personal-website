import React from 'react';
import { Row, Col } from 'reactstrap';

import Contact from './Contact';

/* Renders the home page */
export default function Home() {
  return (
    <div className="container-fluid" id="home">
      <Row>
        <Col md="6" id="me">
          <img src="/images/me.JPG" alt="Picture of Myself" />
        </Col>
        <Col md="6">
          <div id="tag-line">
            <p>I sleep, and I code things.</p>
            <span id="got-ref">(Yes, that was a Game of Thrones reference.)</span>
          </div>
            <p id="blurb">
              Hello, world! I am a software developer with an interest in
              technology in health care. I graduated from Northeastern
              University with a Bachelor of Science in computer science. Before
              pursuing a degree in CS, I was majoring in health science. While
              I am still driven to innovate this field, I wanted to make a
              difference doing what I enjoy: building useful applications that
              can make people's days that much better, whether that impact be
              big or small. I love how prevalent CS is in almost anything and
              the self-empowered problem-solving techniques that this field
              demands.
            </p>
            <Contact />
        </Col>
      </Row>
    </div>
  );
}
