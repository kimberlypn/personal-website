import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';

/* Renders an individual project */
export default function Project({project}) {
  return (
    <Col md="6" className="project">
      <a href={"/projects/" + project.id}>
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

Project.propTypes = {
  project: PropTypes.object.isRequired
};
