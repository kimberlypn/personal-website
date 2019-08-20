import React from 'react';
import BaseComponent from '../../components/baseComponent/BaseComponent';
import SkillType from './SkillType';
import SkillsService from './SkillsService';

export default class Skills extends BaseComponent {
  constructor(props) {
    super(props);
    
    this.state = {skills: {}};
    
    this.registerService(SkillsService);
  }
  
  render() {
    return (
      <div id='skills'>
        {Object.keys(this.state.skills).length > 0 &&
        <React.Fragment>
          <SkillType type={'programming languages'} skills={this.state.skills['programming languages']}/>
          {Object.keys(this.state.skills).map((skill, idx) => (
            skill === 'programming languages'
              ? null
              : <SkillType key={idx} type={skill} skills={this.state.skills[skill]}/>
          ))}
        </React.Fragment>}
      </div>
    );
  }
}