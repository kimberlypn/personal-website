import React from 'react';
import {configure, shallow} from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import Home from './Home';

configure({adapter: new Adaptor()});

describe('Home test', () => {
  describe('when rendering Home', () => {
    let component;
    beforeEach(() => {
      component = shallow(<Home/>);
    });
    
    it('should render a picture of me', () => {
      expect(component.find('img').props()).toEqual({alt: 'Me', id: 'me', src: 'me.jpg'});
    });
    
    it('should render a tag line', () => {
      expect(component.find('#tag-line').text()).toBe('I sleep, and I code things.');
    });
    
    it('should render a Game of Thrones reference', () => {
      expect(component.find('#got-ref').text()).toBe('(Yes, that was a Game of Thrones reference.)');
    });
    
    it('should render a blurb', () => {
      expect(component.find('#blurb').text()).toBe(
        'Hello, world! I am a software developer with a passion for never-ending learning in this ever-growing '
        + 'technological sphere. I graduated from Northeastern University with a Bachelor of Science in computer '
        + 'science (CS) and have experience in full-stack development. My interest lies particularly in web '
        + 'development, as I enjoy the creativity involved with solving problems and presenting the solutions in a way '
        + 'that users can effortlessly benefit. Throughout my career, I hope to build useful applications that can '
        + 'streamline everyday processes and explore the possibilities of data wealth. I love how prevalent CS is in '
        + 'almost anything and the self-empowered problem-solving techniques that this field demands.'
      );
    });
    
    it('should render a contact section', () => {
      expect(component.find('Memo(Contact)').length).toBe(1);
    });
  });
});