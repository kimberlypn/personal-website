import React from 'react';
import { Row, Col } from 'reactstrap';

/* Renders an individual skill */
export default function Skill(props) {
  let skill = props.skill;
  var proficiency = [];

  // Render proficiency points as teal
  for (var i = 0; i < skill.proficiency; i++) {
    proficiency.push(
      <span
        key={i}
        className="dot"
        style={{backgroundColor: '#59c6bb'}}>
      </span>
    );
  }

  // Render missing proficiency points (out of 10) as grey
  for (var i = 0; i < 10 - skill.proficiency; i++) {
    proficiency.push(
      <span
        key={i}
        className="dot"
        style={{backgroundColor: '#bbb'}}>
      </span>
    );
  }

  return (
    <Row className="skill">
      <Col md="2" className="skill-name">{skill.name.toUpperCase()}</Col>
      <Col md="10">
        {proficiency}
      </Col>
    </Row>
  );
}
