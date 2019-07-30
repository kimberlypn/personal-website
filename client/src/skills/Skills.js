import React from 'react';
import BaseComponent from '../BaseComponent';
import SkillsService from './SkillsService';
import {SkillType} from './SkillType';

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
      <div className='container-fluid' id='skills'>
        {Object.keys(this.state.skills).length > 0 && this.renderSkillTypes()}
      </div>
    );
  }
}