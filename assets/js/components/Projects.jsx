import React from 'react';
import { Row } from 'reactstrap';

import Project from './Project';

/* Renders the projects page */
export default function Projects(props) {
  // Render each individual project
  let projects = _.map(props.projects, function(pp) {
    return <Project key={pp.id} project={pp} />;
  });

  return (
    <div className="container-fluid" id="projects">
      <Row>
        {projects}
      </Row>
    </div>
  );
}
