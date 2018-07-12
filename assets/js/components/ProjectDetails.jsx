import React from 'react';
import PropTypes from 'prop-types';

/* Renders the details page for an individual project */
export default function ProjectDetails({project}) {
  let proj = project;

  console.log(proj);

  return (
    <div>
      wassup
    </div>
  );
}

ProjectDetails.propTypes = {
  project: PropTypes.object.isRequired
};
