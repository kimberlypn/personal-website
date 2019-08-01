import React from 'react';
import {Col, Row} from 'reactstrap';
import {Contact} from './Contact';
import './Home.css';

export const Home = () => (
  <div className='container-fluid' id='home'>
    <Row>
      <Col md='6'><img id='me' src={require('../static/images/me.jpg')} alt='Me'/></Col>
      <Col md='6'>
        <p id='tag-line'>I sleep, and I code things.</p>
        <span id='got-ref'>(Yes, that was a Game of Thrones reference.)</span>
        <p id='blurb'>
          Hello, world! I am a software developer with a passion for never-ending learning in this ever-growing
          technological sphere. I graduated from Northeastern University with a Bachelor of Science in computer science
          and have experience in full-stack development. My interest lies particularly in web development, as I enjoy
          the creativity involved with solving problems and presenting the solutions in a way that users can
          effortlessly reap the benefits. Whether the impact be big or small, I want to build useful applications that
          can make people's days that much better. I love how prevalent CS is in almost anything and the self-empowered
          problem-solving techniques that this field demands.
        </p>
        <Contact/>
      </Col>
    </Row>
  </div>
);