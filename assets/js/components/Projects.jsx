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
                Personal Website
                <a href="https://github.com/kimberlypn/personal-website">
                  <i className="fab fa-github"></i>
                </a>
              </CardTitle>
              <CardMedia className="card-media">
                <img src="/images/personal-website.png" alt="Personal Website" />
              </CardMedia>
              <CardText className="card-text">
                <p>Déjà vu? (It's this.)</p>
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
                <p><b>Type: </b>Personal Project</p>
                <p>
                  <b>Tech: </b>HTML, CSS, JavaScript, React, Node.js
                </p>
              </CardText>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card">
              <CardTitle className="card-title">
                Shambomon
                <a href="https://github.com/kimberlypn/Shambomon">
                  <i className="fab fa-github"></i>
                </a>
              </CardTitle>
              <CardMedia className="card-media">
                <img src="/images/shambomon.png" alt="Shambomon" />
              </CardMedia>
              <CardText className="card-text">
                <p>
                  A two-player game inspired by the two classics:&nbsp;
                  <a href="https://en.wikipedia.org/wiki/Rock–paper–scissors">
                    Roshambo
                  </a>
                  &nbsp;("Rock-Paper-Scissors") and&nbsp;
                  <a href="https://en.wikipedia.org/wiki/Pokémon">
                    Pokémon
                  </a>
                </p>
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
                <p>
                  <b>Tech: </b>
                  Phoenix, Elixir, HTML, CSS, JavaScript, React, Node.js
                </p>
              </CardText>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card">
              <CardTitle className="card-title">
                Goat Jumper
                <a href="https://github.com/kimberlypn/GoatJumper">
                  <i className="fab fa-github"></i>
                </a>
              </CardTitle>
              <CardMedia className="card-media">
                <img src="/images/goat-jumper.png" alt="Goat Jumper" />
              </CardMedia>
              <CardText className="card-text">
                <p>
                  An endless platformer where the goal is to survive for as
                  long as possible
                </p>
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
                <p><b>Tech: </b>C++, SDL, Box2D</p>
              </CardText>
            </Card>
          </Col>
        </Row>
        <Row>
        <Col md="4">
          <Card className="card">
            <CardTitle className="card-title">
              TravelPal
              <a href="https://github.com/kimberlypn/TravelPal">
                <i className="fab fa-github"></i>
              </a>
            </CardTitle>
            <CardMedia className="card-media">
              <img src="/images/travelpal.png" alt="TravelPal" />
            </CardMedia>
            <CardText className="card-text">
              <p>A social flights application</p>
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
              <p>
                <b>Tech: </b>
                Phoenix, Elixir, HTML, CSS, JavaScript, React, Redux, Node.js
              </p>
            </CardText>
          </Card>
        </Col>
        </Row>
      </div>
    </MuiThemeProvider>
  );
}
