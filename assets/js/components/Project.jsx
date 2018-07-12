import React from 'react';
import { Col } from 'reactstrap';

/* Renders an individual project */
export default function Project(props) {
  let project = props.project;
  
  return (
    <Col md="6" className="project">
      <a href={"/projects/" + project.id} onClick={() => prop.update(project)}>
        <div className="project-bg">
          <img src={"/images/" + project.img_src} alt={project.img_src} />
          <div className="project-title">
            <p>{project.title.toUpperCase()}</p>
          </div>
        </div>
      </a>
    </Col>
  );
}
