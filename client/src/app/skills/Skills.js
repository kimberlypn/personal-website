import React from 'react';
import BaseComponent from '../../components/baseComponent/BaseComponent';
import {SkillType} from './SkillType';
import SkillsService from './SkillsService';

export class Skills extends BaseComponent {
  constructor(props) {
    super(props);
    
    this.state = {skills: {}};
    
    this.registerService(SkillsService);
  }
  
  renderSkillTypes() {
    return (
      <React.Fragment>
        <SkillType type={'programming languages'} skills={this.state.skills['programming languages']}/>
        {Object.keys(this.state.skills).map(skill => (
          skill === 'programming languages'
            ? null
            : <SkillType type={skill} skills={this.state.skills[skill]}/>
        ))}
      </React.Fragment>
    );
  }
  
  render() {
    return (
      <div id='skills'>
        {Object.keys(this.state.skills).length > 0 && this.renderSkillTypes()}
      </div>
    );
  }
}