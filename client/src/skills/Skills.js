import React from 'react';
import BaseComponent from '../BaseComponent';
import SkillsService from './SkillsService';
import {SkillCategory} from './SkillCategory';

export class Skills extends BaseComponent {
  constructor(props) {
    super(props);
    
    this.state = {skills: {}};
    
    this.registerService(SkillsService);
  }
  
  renderSkillCategories() {
    return (
      <React.Fragment>
        <SkillCategory category={'programming languages'} skills={this.state.skills['programming languages']}/>
        {Object.keys(this.state.skills).map(skill => (
          skill === 'programming languages'
            ? null
            : <SkillCategory category={skill} skills={this.state.skills[skill]}/>
        ))}
      </React.Fragment>
    );
  }
  
  render() {
    return (
      <div className='container-fluid' id='skills'>
        {Object.keys(this.state.skills).length > 0 && this.renderSkillCategories()}
      </div>
    );
  }
}