import React from 'react';
import {configure, shallow} from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import ProjectSummaryRenderer from './ProjectSummaryRenderer';

configure({adapter: new Adaptor()});

describe('ProjectSummaryRenderer test', () => {
  describe('when rendering ProjectSummaryRenderer', () => {
    let component;
    beforeEach(() => {
      component = shallow(<ProjectSummaryRenderer/>);
    });
    
    describe('when a summary does not exist for the project', () => {
      it('should render a message saying, "This project does not have a summary."', () => {
        expect(component.name()).toBe('p');
        expect(component.text()).toBe('This project does not have a summary.');
      });
    });
    
    renderCommonSpec('Forbidden Island', 'ForbiddenIsland');
    
    renderCommonSpec('Goat Jumper', 'GoatJumper');
    
    renderCommonSpec('Kimmy\'s Pinny Arcade', 'PinnyArcade');
    
    renderCommonSpec('Maze Game', 'MazeGame');
    
    renderCommonSpec('Memory Game', 'MemoryGame');
    
    renderCommonSpec('Personal Website', 'PersonalWebsite');
    
    renderCommonSpec('Power Up Gambia', 'PowerUpGambia');
    
    renderCommonSpec('Shambomon', 'Shambomon');
    
    renderCommonSpec('The Jubilee Project', 'JubileeProject');
    
    renderCommonSpec('TravelPal', 'TravelPal');
    
    function renderCommonSpec(projectTitle, projectSummaryComponent) {
      describe(`when the project title is "${projectTitle}"`, () => {
        beforeEach(() => {
          component.setProps({projectTitle});
          component.update();
        });
        
        it(`should render ${projectSummaryComponent}`, () => {
          expect(component.name()).toBe(`Memo(${projectSummaryComponent})`);
          expect(component.props()).toEqual({});
        });
      });
    }
  });
});