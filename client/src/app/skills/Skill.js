import React from 'react';
import {Row, Col} from 'reactstrap';
import './Skill.css';

export const Skill = props => {
  // Render attained skill points as teal and missing skill points (out of 10) as grey
  let skillPoints = [];
  for (let i = 0; i < 10; i++) {
    skillPoints.push(
      <span key={i}
            className='skill-point'
            style={{backgroundColor: i < props.skill.proficiency ? '#59c6bb' : '#bbb'}}
      />
    );
  }
  
  return (
    <Row className='flex-nowrap skill'>
      <Col md='5' className='skill-name'>{props.skill.name.toUpperCase()}</Col>
      <Col md='7'>{skillPoints}</Col>
    </Row>
  );
};