import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Skill from './Skill';
import './SkillType.css';

export default function SkillType(props) {
  return (
    <ExpansionPanel defaultExpanded={props.type.toLowerCase() === 'programming languages'}>
      <ExpansionPanelSummary className='skill-type-header' expandIcon={<ExpandMoreIcon/>}>
        {props.type.toUpperCase()}
      </ExpansionPanelSummary>
      {props.skills.map((skill, idx) => (<Skill key={idx} skill={skill}/>))}
    </ExpansionPanel>
  );
};