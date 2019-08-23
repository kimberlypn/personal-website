import React from 'react';
import {configure, shallow} from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import SkillType from './SkillType';

configure({adapter: new Adaptor()});

describe('SkillType test', () => {
  describe('when rendering SkillType', () => {
    let props, component;
    beforeEach(() => {
      props = {type: 'programming languages', skills: [{id: 0, name: 'Java'}]};
      component = shallow(<SkillType {...props}/>);
    });
    
    describe('when the skill is of type "programming languages"', () => {
      it('should expand ExpansionPanel by default', () => {
        expect(component.prop('defaultExpanded')).toBe(true);
      });
    });
    
    describe('when the skill is not of type "programming languages', () => {
      beforeEach(() => {
        component.setProps({type: 'web', skills: [{id: 0, name: 'JavaScript'}]});
        component.update();
      });
      
      it('should not expand ExpansionPanel by default', () => {
        expect(component.prop('defaultExpanded')).toBe(false);
      });
    });
    
    it('should render skill type, capitalized, as the summary', () => {
      expect(component.find('WithStyles(ForwardRef(ExpansionPanelSummary))').text()).toBe(props.type.toUpperCase());
    });
    
    it('should render Skill for each skill', () => {
      const skills = component.find('Memo(Skill)');
      expect(skills.length).toBe(props.skills.length);
      props.skills.forEach((skill, idx) => {
        const skillComponent = skills.get(idx);
        expect(parseInt(skillComponent.key, 10)).toBe(skill.id);
        expect(skillComponent.props).toEqual({skill});
      });
    });
  });
});