import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

/* Renders an individual experience */
export default function Experience({experience}) {
  // Stylizes the start and end dates
  let start_date = experience.start_date;
  let end_date = experience.end_date;
  var range = "";

  // Converts the month number to a three-letter abbreviation
  function convertMonth(date) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
    'Sep', 'Oct', 'Nov', 'Dec'];
    // Subtract 1 from the month number since the array is 0-indexed
    return months[parseInt(date.substring(5, 7)) - 1];
  }

  // Converts the year from YYYY to 'YY
  function convertYear(date) {
    return '\'' + date.substring(2, 4);
  }

  let start_month = convertMonth(start_date);
  let end_month = convertMonth(end_date);
  let start_year = convertYear(start_date);
  let end_year = convertYear(end_date);

  // Stylize the date range
  if (start_date.substring(0, 4) == end_date.substring(0, 4))
    // If start and end years are the same, only include the year once
    range = start_month + ' - ' + end_month + ' ' + start_year;
  else
    range = start_month + ' ' + start_year + ' - ' + end_month + ' ' + end_year;

  // Split on the "-", which will create an array entry for each point
  let description = experience.description.split("- ");
  var parsed_desc = [];
  // Put a new line after each point, skipping the first entry which is null
  for (var i = 1; i < description.length; i++) {
    parsed_desc.push(<li key={i}>{description[i]}</li>)
  }

  return (
    <div className="container-fluid" className="experience">
      <Row>
        <Col md="3">
          <Col md="12" className="experience-company">
            {experience.company}
          </Col>
          <Col md="12" className="experience-details">
            [{range} | {experience.location}]
          </Col>
        </Col>
        <Col md="1">
        </Col>
        <Col md="8">
          <Col md="12" className="experience-position">
            {experience.position}
          </Col>
          <Col md="12" className="experience-tasks">
            <ul>
              {parsed_desc}
            </ul>
          </Col>
        </Col>
      </Row>
    </div>
  );
}

Experience.propTypes = {
  experience: PropTypes.object.isRequired
};
