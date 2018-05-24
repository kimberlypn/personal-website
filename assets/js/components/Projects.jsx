import React from 'react';
import { Row, Col } from 'reactstrap';

import Header from './Header';

// Renders the "Projects" section
export default function Projects(props) {
  return (
    <div className="container-fluid section" id="projects">
      <Header text="Projects" icon={<i className="fas fa-lightbulb"></i>} />
    </div>
  );
}
