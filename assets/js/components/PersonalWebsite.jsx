import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Main from './Main';

export default function run(store) {
  ReactDOM.render(
    <Provider store={store}>
      <PersonalWebsite state={store.getState()} />
    </Provider>,
    document.getElementById('root')
  );
};

let PersonalWebsite = connect((state) => state)((props) => {
  return (
    <Router>
      <div className="container-fluid">
        <Navigation />
        <Main projects={props.projects} />
      </div>
    </Router>
  );
});
