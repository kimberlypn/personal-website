import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Experiences from './Experiences';
import ProjectDetails from './ProjectDetails';

/* Renders each page */
export default function Main({
  projects,
  projectDetails,
  skills,
  experiences,
  actions }) {

  return (
    <Fragment>
      <Route path="/" exact={true} render={() =>
          <Home />
      } />
      <Route path="/projects" exact={true} render={() =>
        <Projects
          projects={projects}
          update={actions.updateProject} />
      } />
      <Route path="/projects/:id(\d+)" exact={true} render={() =>
          <ProjectDetails project={projectDetails} />
        } />
      <Route path="/skills" exact={true} render={() =>
        <Skills skills={skills} />
      } />
      <Route path="/experience" exact={true} render={() =>
        <Experiences experiences={experiences} />
      } />
    </Fragment>
  );
}

Main.propTypes = {
  projects: PropTypes.array.isRequired,
  projectDetails: PropTypes.object.isRequired,
  skills: PropTypes.array.isRequired,
  experiences: PropTypes.array.isRequired
};
