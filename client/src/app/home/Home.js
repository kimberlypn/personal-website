import React from 'react';
import {Col, Row} from 'reactstrap';
import Contact from './contact/Contact';
import './Home.css';

export default React.memo(function Home() {
  return (
    <div id='home'>
      <Row>
        <Col md='6'><img id='me' src={require('../../assets/images/me.jpg')} alt='Me'/></Col>
        <Col md='6'>
          <p id='tag-line'>I sleep, and I code things.</p>
          <span id='got-ref'>(Yes, that was a Game of Thrones reference.)</span>
          <p id='blurb'>
            Hello, world! I am a software developer with a passion for never-ending learning in this ever-growing
            technological sphere. I graduated from Northeastern University with a Bachelor of Science in computer
            science (CS) and have experience in full-stack development. My interest lies particularly in web
            development, as I enjoy the creativity involved with solving problems and presenting the solutions in a way
            that users can effortlessly benefit. Throughout my career, I hope to build useful applications that can
            streamline everyday processes and explore the possibilities of data wealth. I love how prevalent CS is in
            almost anything and the self-empowered problem-solving techniques that this field demands.
          </p>
          <Contact/>
        </Col>
      </Row>
    </div>
  );
});