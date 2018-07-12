import React from 'react';

import Experience from './Experience';

/* Renders the experience page */
export default function Experiences(props) {
  // Render each individual experience
  let experiences = _.map(props.experiences, function(ee) {
    return <Experience key={ee.id} experience={ee} />;
  });

  return (
    <div className="container-fluid" id="experiences">
      {experiences}
    </div>
  );
}
