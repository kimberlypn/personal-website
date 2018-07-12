import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

/* Renders the details page for an individual project */
export default function ProjectDetails({project}) {
  // TODO: Figure out a cleaner way to customize project descriptions
  var summaries = {};

  let shambomon =
  <p>
    This was the first of two projects for my web development class. The
    assignment was to build a multi-player computer game with a web browser
    interface. My partner and I decided to take a simple game such as&nbsp;
    <a href="https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors">Roshambo</a>
    &nbsp;and give it a little 90s-flare by fusing it with&nbsp;
    <a href="https://en.wikipedia.org/wiki/Pok%C3%A9mon">Pokémon</a>.
    Hence, Shambomon.<br /><br />
    Users have a choice of twelve different Pokémon to play as. The attack buttons
    correspond to the familiar rock, paper, and scissors, but we added additional
    features such as attack multipliers and a special attack that can deal a heavy
    blow if successful. There is also a leaderboard where users can view their
    match histories and ranking.
  </p>

  summaries["shambomon"] = shambomon;

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
          <div className="project-section">
            <h3>Summary</h3>
            <p>{summaries[project.title.toLowerCase()]}</p>
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
