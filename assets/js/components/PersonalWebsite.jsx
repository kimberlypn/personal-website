import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import BackToTop from './BackToTop';
import Home from './Home';
import About from './About';
import Coursework from './Coursework';
import Projects from './Projects';
import Contact from './Contact';

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
        <Fragment>
          <Home />
          <About />
          <Coursework />
          <Projects />
          <Contact />
          <BackToTop />
        </Fragment>
      </Router>
    );
  }
}
