import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

/* Renders a skill category */
export default function SkillCategory({category, skills}) {
  // Keep the programming languages panel expanded by default
  var expanded = category.toLowerCase() == "programming languages";

  return (
    <Fragment>
      {/* Template adapted from: https://material-ui.com/demos/expansion-panels/ */}
      <ExpansionPanel defaultExpanded={expanded}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          {category.toUpperCase()}
        </ExpansionPanelSummary>
        {skills}
      </ExpansionPanel>
    </Fragment>
  );
}

SkillCategory.propTypes = {
  category: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired
};
