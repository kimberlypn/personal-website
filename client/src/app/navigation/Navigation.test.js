import React from 'react';
import {configure, shallow} from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import Navigation from './Navigation';

configure({adapter: new Adaptor()});

describe('Navigation test', () => {
  describe('when rendering Navigation', () => {
    let component;
    beforeEach(() => {
      component = shallow(<Navigation/>);
    });
    
    it('should render a brand', () => {
      expect(component.find('NavbarBrand > h1').text()).toBe('KIMBERLY NGUYEN');
    });
    
    it('should render a toggler', () => {
      expect(component.find('NavbarToggler').length).toBe(1);
    });
    
    it('should not be collapsed by default', () => {
      expect(component.find('Collapse').prop('isOpen')).toBe(false);
    });
    
    it('should render 4 links', () => {
      const links = component.find('NavItem > NavLink');
      expect(links.length).toBe(4);
      expect(links.get(0).props).toEqual({tag: 'a', href: '/', children: 'ABOUT'});
      expect(links.get(1).props).toEqual({tag: 'a', href: '/projects', children: 'PROJECTS'});
      expect(links.get(2).props).toEqual({tag: 'a', href: '/skills', children: 'SKILLS'});
      expect(links.get(3).props).toEqual({tag: 'a', href: '/experiences', children: 'EXPERIENCES'});
    });
    
    describe('when the navigation bar is toggled', () => {
      beforeEach(() => {
        component.find('NavbarToggler').prop('onClick')();
        component.update();
      });
      
      it('should collapse the navigation bar', () => {
        expect(component.find('Collapse').prop('isOpen')).toBe(true);
      });
    });
  });
});