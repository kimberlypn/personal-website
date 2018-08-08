import React from 'react';
import { Row, Col } from 'reactstrap';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

/* Renders the filters for the projects */
export default function Filters(props) {
  // TODO: Create the correct filters
  return (
      <Row id="filters">
        <Col md="2">
          <p>Filter by</p>
        </Col>
        <Col md="10">
          <span>
          <FormControl>
            <InputLabel>Type</InputLabel>
            <Select native>
              <option value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
          </span>
        </Col>
      </Row>
  );
}
