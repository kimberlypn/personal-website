import React from 'react';
import { Col } from 'reactstrap';

/* Renders an individual project */
export default function ProjectCard(props) {
  let project = props.project;

  return (
    <Col md="6" className="project-card">
      <img src={"/images/" + project.img_src} alt={project.img_src} />
      <div className="project-title">
        <p>{project.title.toUpperCase()}</p>
      </div>
    </Col>
  );
}
