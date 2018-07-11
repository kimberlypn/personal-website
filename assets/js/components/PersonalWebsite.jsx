import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Navigation';

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
          <Navigation />
        </Fragment>
      </Router>
    );
  }
}
