import axios from 'axios';

export default {
  componentDidMount,
  getDateRange
}

function componentDidMount() {
  fetchExperiences.call(this);
}

function fetchExperiences() {
  axios.get('/api/v1/experiences').then(response => (this.setState({experiences: response.data})));
}

function getDateRange(startDate, endDate) {
  const START_MONTH = getMonthAbbreviation(startDate);
  const START_YEAR = getYearAbbreviation(startDate);
  if (!endDate) {
    return `${START_MONTH} ${START_YEAR} - Present`;
  }
  
  const END_MONTH = getMonthAbbreviation(endDate);
  const END_YEAR = getYearAbbreviation(endDate);
  return START_YEAR === END_YEAR
    ? `${START_MONTH} - ${END_MONTH} ${START_YEAR}`
    : `${START_MONTH} ${START_YEAR} - ${END_MONTH} ${END_YEAR}`;
}

function getMonthAbbreviation(date) {
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  // Subtract 1 from month number since array is 0-indexed
  return MONTHS[parseInt(date.substring(5, 7)) - 1];
}

function getYearAbbreviation(date) {
  return `'${date.substring(2, 4)}`;
}