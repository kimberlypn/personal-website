import axios from 'axios';
import _ from 'lodash';

export default {
  componentDidMount
}

function componentDidMount() {
  fetchSkills.call(this);
}

function fetchSkills() {
  axios.get('/skills')
    .then(response => (this.setState({skills: sortCategories(groupSkillsByCategory(response.data))})));
}

function groupSkillsByCategory(skills) {
  return _.groupBy(skills, skill => (skill.category.toLowerCase()));
}

function sortCategories(categories) {
  let sortedCategories = {};
  Object.keys(categories).sort().forEach(key => sortedCategories[key] = categories[key]);
  
  return sortedCategories;
}