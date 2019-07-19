import React from 'react';
import BaseComponent from '../BaseComponent';
import ExperiencesService from './ExperiencesService';
import {Col, Row} from 'reactstrap';
import './Experiences.css';

export default class Experiences extends BaseComponent {
  constructor(props) {
    super(props);
    
    this.state = {experiences: []};
    
    this.registerService(ExperiencesService);
  }
  
  renderDescription(experience) {
    let descriptionListElements = [];
    if (!experience.description) {
      descriptionListElements.push(<li>TBD</li>);
    } else {
      // Create array entry for each bullet point in the description
      const bulletPoints = experience.description.split('- ');
      // List each bullet point, skipping the first entry, which is null
      for (let i = 1; i < bulletPoints.length; i++) {
        descriptionListElements.push(<li key={i}>{bulletPoints[i]}</li>)
      }
    }
    return descriptionListElements;
  }
  
  render() {
    return (
      <div className='container-fluid' id='experiences'>
        {this.state.experiences.map((experience, idx) => (
          <Row className='experience' key={idx}>
            <Col md='3'>
              <Col md='12' className='experience-company'>{experience.company}</Col>
              <Col md='12' className='experience-details'>
                [{this.getDateRange(experience.start_date, experience.end_date)} | {experience.location}]
              </Col>
            </Col>
            <Col md='1'/>
            <Col md='8'>
              <Col md='12' className='experience-position'>{experience.position}</Col>
              <Col md='12' className='experience-tasks'>
                <ul>{this.renderDescription(experience)}</ul>
              </Col>
            </Col>
          </Row>
        ))}
      </div>
    );
  }
}