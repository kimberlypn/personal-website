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

  // Render missing proficiency points (out of 10) as grey;
  // start at 10 to avoid having duplicate keys
  for (var i = 10; i > skill.proficiency; i--) {
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
      <Col md="5" className="skill-name">{skill.name.toUpperCase()}</Col>
      <Col md="7">
        {proficiency}
      </Col>
    </Row>
  );
}
