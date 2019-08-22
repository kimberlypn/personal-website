import React from 'react';
import BaseComponent from '../../components/baseComponent/BaseComponent';
import {Col, Row} from 'reactstrap';
import IconLink from '../../components/iconLink/IconLink';
import ProjectSummaryRenderer from './ProjectSummaryRenderer';
import ProjectService from './ProjectService';
import './Project.css';

export default class Project extends BaseComponent {
  constructor(props) {
    super(props);
    
    this.state = {project: {}};
    
    this.registerService(ProjectService);
  }
  
  render() {
    return (
      <div className='project-page'>
        {Object.keys(this.state.project).length > 0 &&
        <Row>
          {this.state.prevProjectId &&
          <Col md='2' className='project-arrows'>
            <IconLink title='Previous'
                      icon='fas fa-chevron-circle-left'
                      link={`/projects/${this.state.prevProjectId}`}
            />
          </Col>}
          <Col md='8'>
            <h1>{this.state.project.title}</h1>
            <p className='project-headline'>{this.state.project.headline}</p>
            <img src={require(`../../assets/images/${this.state.project.img_src}`)} alt={this.state.project.title}/>
            <h3>Details</h3>
            <p className='project-details'>
              <b>Type: </b>{this.state.project.type}<br/>
              <b>Collaborators: </b>{this.state.project.collaborators.join(', ')}<br/>
              <b>Technology: </b>{this.state.project.technology.join(', ')}<br/>
            </p>
            <h3>Summary</h3>
            <ProjectSummaryRenderer projectTitle={this.state.project.title}/>
            <div className='project-links'>
              {this.state.project.repo &&
              <IconLink title='Repo' icon='fab fa-github' link={this.state.project.repo}/>}
              {this.state.project.demo &&
              <IconLink title='Demo' icon='fas fa-play-circle' link={this.state.project.demo}/>}
            </div>
          </Col>
          {this.state.nextProjectId &&
          <Col md='2' className='project-arrows'>
            <IconLink title='Next' icon='fas fa-chevron-circle-right' link={`/projects/${this.state.nextProjectId}`}/>
          </Col>}
        </Row>}
      </div>
    );
  }
}