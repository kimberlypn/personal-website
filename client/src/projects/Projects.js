import React from 'react';
import axios from 'axios';
import {Col, Row} from 'reactstrap';
import './Projects.css';

export const Projects = () => {
  const [projects, setProjects] = React.useState([]);
  
  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/v1/projects');
        setProjects(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProjects();
  }, []);
  
  return (
    <div className='container-fluid' id='projects'>
      <Row>
        {projects.map((project, idx) => (
          <Col md='6' key={idx} className='project'>
            <a href={`/projects/${project.id}`}>
              <div className='project-bg'>
                <img src={require(`../static/images/${project.img_src}`)} alt={project.img_src}/>
                <div className='project-title'>
                  <p>{project.title.toUpperCase()}</p>
                </div>
              </div>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
};