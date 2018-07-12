import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Experiences from './Experiences';

/* Renders each page */
export default function Main(props) {
  return (
    <Fragment>
      <Route path="/" exact={true} render={() =>
          <Home />
      } />
      <Route path="/projects" exact={true} render={() =>
        <Projects projects={props.projects} />
      } />
      <Route path="/skills" exact={true} render={() =>
        <Skills skills={props.skills} />
      } />
      <Route path="/experience" exact={true} render={() =>
        <Experiences experiences={props.experiences} />
      } />
    </Fragment>
  );
}
