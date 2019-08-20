import React from 'react';
import axios from 'axios';
import {Col, Row} from 'reactstrap';
import './Projects.css';

export default function Projects() {
  const [projects, setProjects] = React.useState([]);
  
  React.useEffect(() => {
    axios.get('/api/v1/projects').then(response => setProjects(response.data));
  }, []);
  
  return (
    <div id='projects'>
      <Row>
        {projects.map((project, idx) => (
          <Col md='6' key={idx} className='project'>
            <a href={`/projects/${project.id}`}>
              <div className='project-bg'>
                <img src={require(`../../assets/images/${project.img_src}`)} alt={project.img_src}/>
                <p className='project-title'>{project.title.toUpperCase()}</p>
              </div>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
};