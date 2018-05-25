import React from 'react';
import { Row, Col } from 'reactstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardTitle, CardText, CardMedia, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import Header from './Header';

// Renders the "Projects" section
export default function Projects(props) {
  return (
    <MuiThemeProvider>
      <div className="container-fluid section" id="projects">
        <Header text="Projects" icon={<i className="fas fa-lightbulb"></i>} />
        <Row>
          <Col md="4">
            <Card className="card">
              <CardTitle className="card-title">
                Shambomon
                <a href="https://github.com/kimberlypn/Shambomon">
                  <i className="fab fa-github"></i>
                </a>
              </CardTitle>
              <CardMedia>
                <img src="/images/shambomon.png" alt="Shambomon" />
              </CardMedia>
              <CardText className="card-text">
                <p>
                  A two-player game inspired by the two classics:&nbsp;
                  <a href="https://en.wikipedia.org/wiki/Rock–paper–scissors">
                    Roshambo
                  </a>
                  &nbsp;(more commonly known as "Rock-Paper-Scissors") and&nbsp;
                  <a href="https://en.wikipedia.org/wiki/Pokémon">
                    Pokémon
                  </a>.</p>
                </CardText>
                <FlatButton
                  actAsExpander={true}
                  showExpandableButton={true}
                  fullWidth={true}
                  hoverColor="transparent"
                  disableTouchRipple={true}
                  />
                <CardText className="card-text" id="card-text-expand"
                  expandable={true}>

                  <p><b>Type: </b>Class Project</p>
                  <p><b>Technologies Used: </b>Phoenix, Elixir, HTML, CSS, JavaScript, React</p>

                </CardText>
              </Card>
            </Col>
          </Row>
        </div>
      </MuiThemeProvider>
    );
  }
