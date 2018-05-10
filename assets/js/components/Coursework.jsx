import React from 'react';
import { Row, Col } from 'reactstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card } from 'material-ui/Card';
import { CardHeader, CardBody } from 'reactstrap';

import Header from './Header';

import Header from './Header';

import Header from './Header';

// Renders the "Coursework" section
export default function Coursework(props) {
  return (
    <MuiThemeProvider>
    <div className="container-fluid" id="coursework">
      <Header text="Coursework" icon={<i className="fas fa-book"></i>} />
      <Row>
        <Col md="6">
          <Card className="card">
            <CardHeader>
              CS Courses
            </CardHeader>
            <CardBody>
              <p><i class="fas fa-desktop"></i> <span>CS 1210:</span> CS/IS Overview 2: Co-op Prep</p>
              <p><i class="fas fa-desktop"></i> <span>CS 1800:</span> Discrete Structures</p>
              <p><i class="fas fa-desktop"></i> <span>CS 2500:</span> Fundamentals of Computer Science 1</p>
              <p><i class="fas fa-desktop"></i> <span>CS 2510:</span> Fundamentals of Computer Science 2</p>
              <p><i class="fas fa-desktop"></i> <span>CS 2800:</span> Logic and Computation</p>
              <p><i class="fas fa-desktop"></i> <span>CS 3200:</span> Database Design</p>
              <p><i class="fas fa-desktop"></i> <span>CS 3500:</span> Object-Oriented Design</p>
              <p><i class="fas fa-desktop"></i> <span>CS 3520:</span> Programming in C++</p>
              <p><i class="fas fa-desktop"></i> <span>CS 3650:</span> Computer Systems</p>
              <p><i class="fas fa-desktop"></i> <span>CS 3700:</span> Networks & Distributed Systems</p>
              <p><i class="fas fa-desktop"></i> <span>CS 3800:</span> Theory of Computation</p>
              <p><i class="fas fa-desktop"></i> <span>CS 4400:</span> Programming Languages</p>
              <p><i class="fas fa-desktop"></i> <span>CS 4500:</span> Software Development</p>
              <p><i class="fas fa-desktop"></i> <span>CS 4550:</span> Web Development</p>
              <p><i class="fas fa-desktop"></i> <span>CS 4800:</span> Algorithms & Data</p>
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card className="card">
            <CardHeader>
              Other Courses
            </CardHeader>
            <CardBody>
              <p><i class="fas fa-dna"></i> <span>BIOL 1117:</span> Integrated Anatomy & Physiology 1</p>
              <p><i class="fas fa-dna"></i> <span>BIOL 1119:</span> Integrated Anatomy & Physiology 2</p>
              <p><i class="fas fa-flask"></i> <span>CHEM 1101:</span> General Chemistry for Health Science</p>
              <p><i class="fas fa-flask"></i> <span>CHEM 1214:</span> General Chemistry 2</p>
              <p><i class="fas fa-wrench"></i> <span>EECE 2160:</span> Embedded Design: Enabling Robotics</p>
              <p><i class="fas fa-pencil-alt"></i> <span>ENGW 3302:</span> Advanced Writing in the Technical Professions</p>
              <p><i class="fas fa-heartbeat"></i> <span>HSCI 1105:</span> Nutrition</p>
              <p><i class="fas fa-calculator"></i> <span>MATH 1342:</span> Calculus 2 for Science/Engineering</p>
              <p><i class="fas fa-calculator"></i> <span>MATH 2280:</span> Statistics and Software</p>
              <p><i class="fas fa-calculator"></i> <span>MATH 2331:</span> Linear Algebra</p>
              <p><i class="fas fa-calculator"></i> <span>MATH 3081:</span> Probability and Statistics</p>
              <p><i class="fas fa-comments"></i> <span>PHIL 1145:</span> Technology and Human Values</p>
              <p><i class="fas fa-hospital"></i> <span>PHTH 1260:</span> American Healthcare System</p>
              <p><i class="fas fa-cogs"></i> <span>PSYC 1101:</span> Foundations of Psychology</p>
              <p><i class="fas fa-users"></i> <span>SOCL 1101:</span> Introduction to Sociology</p>
              <p><i class="fas fa-magic"></i> <span>THTR 1170:</span> The Eloquent Presenter</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  </MuiThemeProvider>
  );
}
