import React from 'react';
import PropTypes from 'prop-types';

import Experience from './Experience';

/* Renders the experience page */
export default function Experiences({experiences}) {
  // Render each individual experience
  let exps = _.map(experiences, function(ee) {
    return <Experience key={ee.id} experience={ee} />;
  });

  return (
    <div className="container-fluid" id="experiences">
      {exps}
    </div>
  );
}

Experiences.propTypes = {
  experiences: PropTypes.array.isRequired
};
