import React from 'react';
import { Row, Col } from 'reactstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import Navigation from './Navigation';

// Renders the home page
export default function Home(props) {
  // Style for the Paper component
  const style = {
    height: 450,
    width: 450,
    display: 'block',
    margin: 'auto'
  };

  return (
    <MuiThemeProvider>
      <div className="container parent" id="home">
        <div className="child">
          <h1>Kimberly Nguyen</h1>
          <Row>
            <Paper style={style} zDepth={4} circle={true} >
              <img src="/images/me.jpg" alt="Picture of Myself" />
            </Paper>
          </Row>
          <Navigation />
        </div>
      </div>
    </MuiThemeProvider>
  );
}
