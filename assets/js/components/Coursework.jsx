import React from 'react';
import { Row, Col } from 'reactstrap';

import Header from './Header';

// Renders the "Coursework" section
export default function Coursework(props) {
  return (
    <div className="container-fluid" id="coursework">
      <Header text="Coursework" icon={<i className="fas fa-book"></i>} />
    </div>
  );
}
