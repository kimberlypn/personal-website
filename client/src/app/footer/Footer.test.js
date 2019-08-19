import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer';

configure({adapter: new Adapter()});

describe('Footer test', () => {
  describe('when rendering Footer', () => {
    let component;
    beforeEach(() => {
      component = shallow(<Footer/>);
    });
    
    it('should return a footer with a copyright statement', () => {
      expect(component.name()).toBe('footer');
      expect(component.text()).toBe('Copyright © 2018 Kimberly Nguyen | All Rights Reserved');
    });
  });
});