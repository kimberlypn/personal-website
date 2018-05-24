import React from 'react';
import { Row, Col } from 'reactstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import Navigation from './Navigation';

// Renders the home page
export default function Home(props) {
  // Style for the Paper component
  const style = {
    height: 'auto',
    width: '100%',
    display: 'block',
    margin: 'auto'
  };

  return (
    <div className="container-fluid" id="home">
      <Row>
        <Col md="12">
          <h1>Kimberly Nguyen</h1>
        </Col>
      </Row>
      <Row>
        <Col md="3"></Col>
        <Col md="6">
          <MuiThemeProvider>
            <Paper style={style} zDepth={4} circle={true}>
              <img src="/images/me.jpg" alt="Picture of Myself" />
            </Paper>
          </MuiThemeProvider>
        </Col>
        <Col md="3"></Col>
      </Row>
      <Navigation />
    </div>
  );
}
