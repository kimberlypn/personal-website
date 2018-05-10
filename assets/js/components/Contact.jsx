import React from 'react';

import Header from './Header';

// Renders the "Contact" section
export default function Contact(props) {
  return (
    <div className="container-fluid" id="contact">
      <Header text="Contact" icon={<i className="fas fa-envelope"></i>} />
    </div>
  );
}
