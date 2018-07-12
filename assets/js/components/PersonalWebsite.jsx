import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from './Navigation';
import Main from './Main';
import Footer from './Footer';

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
        <Main
          projects={props.projects}
          skills={props.skills}
          experiences={props.experiences} />
        <Footer />
      </div>
    </Router>
  );
});
