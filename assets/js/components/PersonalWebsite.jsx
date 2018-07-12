import React, { Fragment } from 'react';
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
  function updateProject(project) {
    props.dispatch({
      type: 'UPDATE_PROJECT',
      data: project
    });
  }

  const actions = {
    updateProject
  }

  return (
    <Fragment>
      <Navigation />
      <Router>
        <div className="container-fluid" id="index">
          <Main
            {...props}
            actions={actions} />
          <Footer />
        </div>
      </Router>
    </Fragment>
  );
});
