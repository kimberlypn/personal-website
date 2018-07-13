import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Tooltip from '@material-ui/core/Tooltip';

import Shambomon from './Shambomon';
import TravelPal from './TravelPal';
import GoatJumper from './GoatJumper';

/* Renders the details page for an individual project */
export default function ProjectDetails({project}) {
  // TODO: Figure out a cleaner way to customize project descriptions
  var summaries = {};

  // Add the pages for each project to the summaries dictionary
  summaries["shambomon"] = <Shambomon />;
  summaries["travelpal"] = <TravelPal />;
  summaries["goat jumper"] = <GoatJumper />;

  let summary = summaries[project.title.toLowerCase()];
  var summarySection;

  // Only display the summary section if the project has a summary
  if (summary) {
    summarySection = (
      <div className="project-section">
        <h3>Summary</h3>
        {summary}
      </div>
    );
  }

  return (
    <div className="container-fluid project-page">
      <Row>
        <Col md="2"></Col>
        <Col md="8">
          <h1>{project.title}</h1>
          <p className="project-headline">{project.headline}</p>
          <img src={"/images/" + project.img_src} alt={"Picture of " + project.title} />
          <div className="project-section">
            <h3>Details</h3>
            <p>
              <b>Type: </b>{project.type}<br />
              <b>Collaborators: </b>{project.collaborators}<br />
              <b>Technology: </b>{project.technology}<br />
            </p>
          </div>
          {summarySection}
          <div className="repo-icon">
            <Tooltip id="tooltip-icon" title="Repo">
              <a href={project.repo}>
                <i className="fab fa-github"></i>
              </a>
            </Tooltip>
          </div>
        </Col>
        <Col md="2"></Col>
      </Row>
    </div>
  );
}

ProjectDetails.propTypes = {
  project: PropTypes.object.isRequired
};
