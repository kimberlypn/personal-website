import React, { Fragment } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

/* Renders a skill category */
export default function SkillCategory(props) {
  // Keep the programming languages panel expanded by default
  var expanded = props.category.toLowerCase() == "programming languages";

  return (
    <Fragment>
      {/* Template adapted from: https://material-ui.com/demos/expansion-panels/ */}
      <ExpansionPanel defaultExpanded={expanded}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          {props.category.toUpperCase()}
        </ExpansionPanelSummary>
        {props.skills}
      </ExpansionPanel>
    </Fragment>
  );
}
