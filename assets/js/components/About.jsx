import React from 'react';
import { Row, Col } from 'reactstrap';

import Header from './Header';

// Renders the "About" section
export default function About(props) {
  return (
    <div className="container-fluid" id="about">
      <Header text="About" icon={<i className="fas fa-user-circle"></i>} />
    </div>
  );
}
