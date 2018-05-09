import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';

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
        </Fragment>
      </Router>
    );
  }
}
