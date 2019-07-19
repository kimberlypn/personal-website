import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Skill} from './Skill';
import './SkillCategory.css';

export const SkillCategory = props => {
  return <React.Fragment>
    <ExpansionPanel defaultExpanded={props.category.toLowerCase() === 'programming languages'}>
      <ExpansionPanelSummary className='skill-category-header' expandIcon={<ExpandMoreIcon/>}>
        {props.category.toUpperCase()}
      </ExpansionPanelSummary>
      {props.skills.map((skill, idx) => (<Skill key={idx} skill={skill}/>))}
    </ExpansionPanel>
  </React.Fragment>;
};