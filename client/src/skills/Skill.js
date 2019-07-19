import React from 'react';
import {Row, Col} from 'reactstrap';
import './Skill.css';

export const Skill = props => {
  // Render attained proficiency points as teal and missing proficiency points (out of 10) as grey
  let proficiencyPoints = [];
  for (let i = 0; i < 10; i++) {
    proficiencyPoints.push(
      <span key={i}
            className='dot'
            style={{backgroundColor: i < props.skill.proficiency ? '#59c6bb' : '#bbb'}}
      />
    );
  }
  
  return (
    <Row className='skill'>
      <Col md='5' className='skill-name'>{props.skill.name.toUpperCase()}</Col>
      <Col md='7'>{proficiencyPoints}</Col>
    </Row>
  );
};