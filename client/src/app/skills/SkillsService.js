import axios from 'axios';
import _ from 'lodash';

export default {
  componentDidMount
}

function componentDidMount() {
  fetchSkills(this.setState.bind(this));
}

function fetchSkills(setState) {
  axios.get('/api/v1/skills').then(response => setState({skills: sortSkillTypes(groupSkillsByType(response.data))}));
}

function groupSkillsByType(skills) {
  return _.groupBy(skills, skill => skill.type.toLowerCase());
}

function sortSkillTypes(skillTypes) {
  const sortedTypes = [];
  Object.keys(skillTypes).sort().forEach(skillType =>
    skillType === 'programming languages'
      ? sortedTypes.unshift({skillType, skills: skillTypes[skillType]})
      : sortedTypes.push({skillType, skills: skillTypes[skillType]})
  );
  return sortedTypes;
}