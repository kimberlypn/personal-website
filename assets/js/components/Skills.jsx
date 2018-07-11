import React from 'react';

import Skill from './Skill';

/* Renders the skills page */
export default function Skills(props) {
  // Render each individual skill
  let skills = _.map(props.skills, function(ss) {
    return <Skill key={ss.id} skill={ss} />;
  });

  return (
    <div className="container-fluid" id="skills">
      {skills}
    </div>
  );
}
