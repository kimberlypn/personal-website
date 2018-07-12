import React from 'react';

import Skill from './Skill';
import SkillCategory from './SkillCategory';

/* Renders the skills page */
export default function Skills(props) {
  // Render each individual skill by category
  let languages = _.map(props.skills, function(ss) {
    if (ss.category.toLowerCase() == "programming language")
    return <Skill key={ss.id} skill={ss} />;
  });

  let web = _.map(props.skills, function(ss) {
    if (ss.category.toLowerCase() == "web")
    return <Skill key={ss.id} skill={ss} />;
  });

  let databases = _.map(props.skills, function(ss) {
    if (ss.category.toLowerCase() == "database")
    return <Skill key={ss.id} skill={ss} />;
  });

  let frameworks = _.map(props.skills, function(ss) {
    if (ss.category.toLowerCase() == "framework")
    return <Skill key={ss.id} skill={ss} />;
  });

  let libraries = _.map(props.skills, function(ss) {
    if (ss.category.toLowerCase() == "library")
    return <Skill key={ss.id} skill={ss} />;
  });

  return (
    <div className="container-fluid" id="skills">
      <SkillCategory category="Programming Languages" skills={languages} />
      <SkillCategory category="Web" skills={web} />
      <SkillCategory category="Databases" skills={databases} />
      <SkillCategory category="Frameworks" skills={frameworks} />
      <SkillCategory category="Libraries" skills={libraries} />
    </div>
  );
}
