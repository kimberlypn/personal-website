import React from 'react';
import BaseComponent from '../../components/baseComponent/BaseComponent';
import SkillType from './SkillType';
import SkillsService from './SkillsService';

export default class Skills extends BaseComponent {
  constructor(props) {
    super(props);
    
    this.state = {skills: []};
    
    this.registerService(SkillsService);
  }
  
  render() {
    return (
      <div id='skills'>
        {this.state.skills.map((skill, idx) => (<SkillType key={idx} type={skill.skillType} skills={skill.skills}/>))}
      </div>
    );
  }
}