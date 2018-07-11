import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';

export default function run(root) {
  ReactDOM.render(<PersonalWebsite />, root);
}

class PersonalWebsite extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Navigation />
          <Route path="/" exact={true} render={() =>
              <Home />
          } />
          <Route path="/projects" exact={true} render={() =>
              <Projects />
          } />
          <Route path="/skills" exact={true} render={() =>
              <Skills />
          } />
          <Route path="/experience" exact={true} render={() =>
              <Experience />
          } />
        </div>
      </Router>
    );
  }
}
