import axios from 'axios';
import _ from 'lodash';

export default {
  componentDidMount
}

function componentDidMount() {
  fetchSkills.call(this);
}

function fetchSkills() {
  axios.get('/api/v1/skills')
    .then(response => (this.setState({skills: sortSkillTypes(groupSkillsByType(response.data))})));
}

function groupSkillsByType(skills) {
  return _.groupBy(skills, skill => (skill.type.toLowerCase()));
}

function sortSkillTypes(types) {
  let sortedTypes = {};
  Object.keys(types).sort().forEach(key => sortedTypes[key] = types[key]);
  
  return sortedTypes;
}