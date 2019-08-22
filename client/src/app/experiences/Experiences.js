import React from 'react';
import BaseComponent from '../../components/baseComponent/BaseComponent';
import {Col, Row} from 'reactstrap';
import ExperiencesService from './ExperiencesService';
import './Experiences.css';

export default class Experiences extends BaseComponent {
  constructor(props) {
    super(props);
    
    this.state = {experiences: []};
    
    this.registerService(ExperiencesService);
  }
  
  render() {
    return (
      <div id='experiences'>
        {this.state.experiences.map((experience, idx) => (
          <Row className='experience' key={idx}>
            <Col md='3'>
              {(idx === 0 || this.state.experiences[idx - 1].company !== experience.company) &&
              <Col md='12' className='experience-company'>{experience.company}</Col>}
              <Col md='12' className='experience-details'>
                [{this.getDateRange(experience.start_date, experience.end_date)} | {experience.location}]
              </Col>
            </Col>
            <Col md={{size: 8, offset: 1}}>
              <Col md='12' className='experience-position'>{experience.position}</Col>
              <Col md='12' className='experience-tasks'>
                <ul>{experience.description.map((bulletPoint, idx) => (<li key={idx}>{bulletPoint}</li>))}</ul>
              </Col>
            </Col>
          </Row>
        ))}
      </div>
    );
  }
}