import React from 'react';
import BaseComponent from '../BaseComponent';
import ProjectService from './ProjectService';
import {Col, Row} from 'reactstrap';
import {IconLink} from '../subcomponents/IconLink';
import {ProjectSummaryRenderer} from './ProjectSummaryRenderer';

export default class Project extends BaseComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      nextProjectId: undefined,
      prevProjectId: undefined,
      project: {}
    };
    
    this.registerService(ProjectService);
  }
  
  render() {
    return (
      <div className='project-page'>
        <Row>
          {this.state.prevProjectId &&
          <Col md='2' className='project-arrows'>
            <IconLink title='Previous'
                      icon='fas fa-chevron-circle-left'
                      link={`/projects/${this.state.prevProjectId}`}/>
          </Col>}
          {Object.keys(this.state.project).length > 0 &&
          <Col md='8'>
            <h1>{this.state.project.title}</h1>
            <p className='project-headline'>{this.state.project.headline}</p>
            <img src={require(`../static/images/${this.state.project.img_src}`)} alt={this.state.project.title}/>
            <div className='project-section project-details'>
              <h3>Details</h3>
              <p>
                <b>Type: </b>{this.state.project.type}<br/>
                <b>Collaborators: </b>{this.state.project.collaborators.join(', ')}<br/>
                <b>Technology: </b>{this.state.project.technology.join(', ')}<br/>
              </p>
            </div>
            <div className='project-section'>
              <h3>Summary</h3>
              <ProjectSummaryRenderer projectTitle={this.state.project.title}/>
            </div>
            <div className='repo-icon'>
              {this.state.project.repo &&
              <IconLink title='Repo' icon='fab fa-github' link={this.state.project.repo}/>}
              {this.state.project.demo &&
              <IconLink title='Demo' icon='fas fa-play-circle' link={this.state.project.demo}/>}
            </div>
          </Col>}
          {this.state.nextProjectId &&
          <Col md='2' className='project-arrows'>
            <IconLink title='Next' icon='fas fa-chevron-circle-right' link={`/projects/${this.state.nextProjectId}`}/>
          </Col>}
        </Row>
      </div>
    );
  }
}