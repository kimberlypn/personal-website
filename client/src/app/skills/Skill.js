import React from 'react';
import {Col, Row} from 'reactstrap';
import './Skill.css';

export default React.memo(function Skill(props) {
  // Used to render attained skill points as teal and missing skill points (out of 10) as grey
  const skillPoints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Row className='flex-nowrap skill'>
      <Col md='5' className='skill-name'>{props.skill.name.toUpperCase()}</Col>
      <Col md='7'>
        {skillPoints.map(skillPoint => (
          <span key={skillPoint}
                className='skill-point'
                style={{backgroundColor: skillPoint < props.skill.proficiency ? '#59c6bb' : '#bbb'}}
          />
        ))}
      </Col>
    </Row>
  );
});