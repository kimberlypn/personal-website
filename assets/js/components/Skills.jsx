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

  // Order the categories alphabetically
  const orderedGroups = {};
  Object.keys(groups).sort().forEach(function(key) {
    orderedGroups[key] = groups[key];
  });

  // Build the SkillCategory component for each category
  let categories = [];
  Object.keys(orderedGroups).forEach(function(key, i) {
    // Skip programming language category so that I can hardcode it to be first
    if (key != "programming language") {
      categories.push(
        <SkillCategory key={i} category={key} skills={orderedGroups[key]} />
      );
    }
  });

  return (
    <div className="container-fluid" id="skills">
      <SkillCategory category={"programming Language"} skills={groups["programming language"]} />
      {categories}
    </div>
  );
}

Skills.propTypes = {
  skills: PropTypes.array.isRequired
};
