import React from 'react';
import { Row, Col } from 'reactstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

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
          <Row id="home-btns">
            <Col md="3">
              <i className="fas fa-user-circle"></i>
              <p>About</p>
            </Col>
            <Col md="3">
              <i className="fas fa-book"></i>
              <p>Coursework</p>
            </Col>
            <Col md="3">
              <i className="fas fa-lightbulb"></i>
              <p>Personal Projects</p>
            </Col>
            <Col md="3">
              <i className="fas fa-envelope"></i>
              <p>Contact</p>
            </Col>
          </Row>
        </div>
      </div>
    </MuiThemeProvider>
  );
}
