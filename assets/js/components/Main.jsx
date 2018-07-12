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
  skills,
  experiences }) {

  return (
    <Fragment>
      <Route path="/" exact={true} render={() =>
          <Home />
      } />
      <Route path="/projects" exact={true} render={() =>
        <Projects projects={projects} />
      } />
      <Route path="/projects/:id(\d+)" exact={true} render={({match}) =>
          <ProjectDetails
            project={
              _.find(projects, function(pp) {
                return pp.id == match.params.id;
              })} />
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
  skills: PropTypes.array.isRequired,
  experiences: PropTypes.array.isRequired
};
