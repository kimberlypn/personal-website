import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

// Renders the "Contact" section
export default function Header({ text, icon }) {
  // Style for the Paper component
  const style = {
    height: '60px',
    width: '100%'
  };

  return (
    <MuiThemeProvider>
      <Paper style={style} zDepth={4}>
          <h1>{icon} {text}</h1>
      </Paper>
    </MuiThemeProvider>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired
};
