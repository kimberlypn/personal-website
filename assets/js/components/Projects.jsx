import React from 'react';
import { Row } from 'reactstrap';

import ProjectCard from './ProjectCard';

/* Renders the projects page */
export default function Projects(props) {
  // Render each individual project
  let projects = _.map(props.projects, function(pp) {
    return <ProjectCard key={pp.id} project={pp} />;
  });

  return (
    <div id="projects">
      <Row>
        {projects}
      </Row>
    </div>
  );
}
