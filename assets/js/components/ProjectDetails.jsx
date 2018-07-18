import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import IconLink from './IconLink';
import ForbiddenIsland from './projects/ForbiddenIsland';
import GoatJumper from './projects/GoatJumper';
import MemoryGame from './projects/MemoryGame';
import PinnyArcade from './projects/PinnyArcade';
import PersonalSite from './projects/PersonalSite';
import Shambomon from './projects/Shambomon';
import TravelPal from './projects/TravelPal';

/* Renders the details page for an individual project */
export default function ProjectDetails({projects, project}) {
  // TODO: Figure out a cleaner way to customize project descriptions
  var summaries = {};

  // Add the pages for each project to the summaries dictionary
  summaries['forbidden island'] = <ForbiddenIsland />;
  summaries['goat jumper'] = <GoatJumper />;
  summaries['kimmy\'s pinny arcade'] = <PinnyArcade />;
  summaries['memory game'] = <MemoryGame />;
  summaries['personal website'] = <PersonalSite />;
  summaries['shambomon'] = <Shambomon />;
  summaries['travelpal'] = <TravelPal />;

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

  // Returns the index of this project in the projects array
  function getIndex() {
    return _.map(projects, function(pp) {
      return pp.id;
    }).indexOf(project.id);
  }

  // Returns the id of the next project
  function getNext() {
    let curr = getIndex();
    // Wrap around if this is the last project in the array
    if (curr == projects.length - 1)
      return projects[0].id;
    else
      return projects[curr + 1].id;
  }

  // Returns the id of the previous project
  function getPrev() {
    let curr = getIndex();
    // Wrap around if this is the first project in the array
    if (curr == 0)
      return projects[projects.length - 1].id;
    else
      return projects[curr - 1].id;
  }

  // Only provide a link to the demo if it exists
  let demo = [];
  if (project.demo != null) {
    demo.push(
      <IconLink title="Demo" icon="fas fa-play-circle" link={project.demo} />
    );
  }

  return (
    <div className="container-fluid project-page">
      <Row>
        <Col md="2" className="project-arrows">
          {/* Icon source: https://fontawesome.com/icons/chevron-circle-left?style=solid */}
          <IconLink title="Previous" icon="fas fa-chevron-circle-left"
            link={"/projects/" + getPrev()} />
        </Col>
        <Col md="8">
          <h1>{project.title}</h1>
          <p className="project-headline">{project.headline}</p>
          <img src={"/images/" + project.img_src} alt={"Picture of " + project.title} />
          <div className="project-section project-details">
            <h3>Details</h3>
            <p>
              <b>Type: </b>{project.type}<br />
              <b>Collaborators: </b>{project.collaborators}<br />
              <b>Technology: </b>{project.technology}<br />
            </p>
          </div>
          {summarySection}
          <div className="repo-icon">
            {/* Icon source: https://fontawesome.com/icons/github?style=brands */}
            <IconLink title="Repo" icon="fab fa-github" link={project.repo} />
            {/* Icon source: https://fontawesome.com/icons/play-circle?style=solid */}
            {demo}
          </div>
        </Col>
        <Col md="2" className="project-arrows">
          {/* Icon source: https://fontawesome.com/icons/chevron-circle-right?style=solid */}
          <IconLink title="Next" icon="fas fa-chevron-circle-right"
            link={"/projects/" + getNext()} />
        </Col>
      </Row>
    </div>
  );
}

ProjectDetails.propTypes = {
  projects: PropTypes.array.isRequired,
  project: PropTypes.object.isRequired
};
