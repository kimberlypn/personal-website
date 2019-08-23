import React from 'react';
import {configure, shallow} from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import Skill from './Skill';

configure({adapter: new Adaptor()});

describe('Skill test', () => {
  describe('when rendering Skill', () => {
    let props, component;
    beforeEach(() => {
      props = {skill: {name: 'name', proficiency: 7}};
      component = shallow(<Skill {...props}/>);
    });
    
    it('should render the name of the skill', () => {
      expect(component.find('.skill-name').prop('children')).toBe(props.skill.name.toUpperCase());
    });
    
    it('should render attained skill points as teal and missing skill points (out of 10) as grey', () => {
      const skillPoints = component.find('span');
      for (let i = 0; i < 10; i++) {
        expect(skillPoints.get(i).props).toEqual({
          className: 'skill-point',
          style: {backgroundColor: i < props.skill.proficiency ? '#59c6bb' : '#bbb'}
        });
      }
    });
  });
});