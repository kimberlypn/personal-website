import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';

import Project from './Project';

/* Renders the projects page */
export default function Projects({projects, update}) {
  // Render each individual project
  let projs = _.map(projects, function(pp) {
    return (
      <Project
        key={pp.id}
        project={pp}
        update={update} />
    );
  });

  return (
    <div className="container-fluid" id="projects">
      <Row>
        {projs}
      </Row>
    </div>
  );
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired
};
