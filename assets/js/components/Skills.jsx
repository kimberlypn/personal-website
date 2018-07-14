import React from 'react';
import PropTypes from 'prop-types';

import Skill from './Skill';
import SkillCategory from './SkillCategory';

/* Renders the skills page */
export default function Skills({skills}) {
  // Create an associative array mapping categories to skills
  let groups = _.groupBy(skills, function(ss) {
    return ss.category.toLowerCase();
  });

  // Create the skill components for each category
  for (var i in groups) {
    groups[i] = _.map(groups[i], function(ss) {
      return <Skill key={ss.id} skill={ss} />;
    });
  }

  return (
    <div className="container-fluid" id="skills">
      <SkillCategory category="Programming Languages" skills={groups["programming language"]} />
      <SkillCategory category="Web" skills={groups["web"]} />
      <SkillCategory category="Databases" skills={groups["database"]} />
      <SkillCategory category="Frameworks" skills={groups["framework"]} />
      <SkillCategory category="Libraries" skills={groups["library"]} />
      <SkillCategory category="Systems, Software, & Tools" skills={groups["systems, software, & tools"]} />
    </div>
  );
}

Skills.propTypes = {
  skills: PropTypes.array.isRequired
};
