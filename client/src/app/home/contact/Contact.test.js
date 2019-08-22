import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Contact from './Contact';

configure({adapter: new Adapter()});

describe('Contact test', () => {
  describe('when rendering Contact', () => {
    let component, icons;
    beforeEach(() => {
      component = shallow(<Contact/>);
      icons = component.find('Memo(IconLink)');
    });
    
    it('should render an e-mail icon', () => {
      expect(icons.get(0).props).toEqual({
        title: 'E-mail',
        icon: 'fas fa-envelope',
        link: 'mailto:nguyen.kp96@gmail.com'
      });
    });
    
    it('should render a GitHub icon', () => {
      expect(icons.get(1).props).toEqual({
        title: 'GitHub',
        icon: 'fab fa-github',
        link: 'https://github.com/kimberlypn'
      });
    });
    
    it('should render a LinkedIn icon', () => {
      expect(icons.get(2).props).toEqual({
        title: 'LinkedIn',
        icon: 'fab fa-linkedin',
        link: 'https://www.linkedin.com/in/kimberlypn/'
      });
    });
  });
});