import React from 'react';
import {configure, shallow} from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import Skills from './Skills';

configure({adapter: new Adaptor()});

describe('Skills test', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Skills/>);
  });
  
  describe('when initializing Skills', () => {
    it('should initialize the state', () => {
      expect(component.instance().state).toEqual({skills: []});
    });
  });
  
  describe('when rendering Skills', () => {
    let state;
    beforeEach(() => {
      state = {
        skills: [
          {skillType: 'programming languages', skills: []},
          {skillType: 'databases', skills: []},
          {skillType: 'frameworks & libraries', skills: []}
        ]
      };
      component.setState(state);
      component.update();
    });
    
    it('should render SkillType for each skill', () => {
      const skillTypes = component.find('SkillType');
      const skills = component.instance().state.skills;
      expect(skillTypes.length).toBe(skills.length);
      skills.forEach((skill, idx) => {
        expect(skillTypes.get(idx).props).toEqual({type: skill.skillType, skills: skill.skills});
      });
    });
  });
});