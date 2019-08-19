import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mockService} from '../../components/testHelper/TestHelper';
import Experiences from './Experiences';
import ExperiencesService from './ExperiencesService';

configure({adapter: new Adapter});

describe('Experiences test', () => {
  let component;
  beforeEach(() => {
    mockService(ExperiencesService);
    ExperiencesService.getDateRange = jest.fn(() => 'date');
    component = shallow(<Experiences/>);
  });
  
  describe('when constructing Experiences', () => {
    it('should initialize the state', () => {
      expect(component.instance().state).toEqual({experiences: []});
    });
  });
  
  describe('when rendering Experiences', () => {
    let state;
    beforeEach(() => {
      state = {
        experiences: [{
          company: 'company0',
          start_date: '2019-01-01',
          location: 'location0',
          position: 'position0',
          description: ['description0', 'description1', 'description2']
        }, {
          company: 'company1',
          start_date: '2018-01-01',
          end_date: '2018-12-31',
          location: 'location1',
          position: 'position1',
          description: ['description0', 'description1']
        }, {
          company: 'company1',
          start_date: '2017-01-01',
          end_date: '2017-12-31',
          location: 'location1',
          position: 'position2',
          description: ['description0']
        }]
      };
      component.setState(state);
      component.update();
    });
    
    it('should render a top-level div', () => {
      expect(component.name()).toBe('div');
      expect(component.children().length).toBe(component.instance().state.experiences.length);
      expect(Object.keys(component.props())).toEqual(['id', 'children']);
      expect(component.prop('id')).toBe('experiences');
    });
    
    describe('when rendering the 1st experience', () => {
      it('should render the company', () => {
        const experience = component.instance().state.experiences[0];
        const experienceSection = component.childAt(0);
        expect(experienceSection.find('.experience-company').prop('children')).toBe(experience.company);
      });
    });
    
    describe('when rendering an experience that is not the 1st but whose company has not yet been rendered', () => {
      it('should render the company', () => {
        const experience = component.instance().state.experiences[1];
        const experienceSection = component.childAt(1);
        expect(experienceSection.find('.experience-company').prop('children')).toBe(experience.company);
      });
    });
    
    describe('when rendering an experience that is not the 1st but whose company has already been rendered', () => {
      it('should not render the company', () => {
        const experienceSection = component.childAt(2);
        expect(experienceSection.find('.experience-company').length).toBe(0);
      });
    });
    
    it('should render the duration spent at and the location of each company', () => {
      expect(ExperiencesService.getDateRange).toHaveBeenCalledTimes(component.instance().state.experiences.length);
      component.instance().state.experiences.map((experience, idx) => {
        const expectedDetails = `[${component.instance().getDateRange()} | ${experience.location}]`;
        expect(ExperiencesService.getDateRange.mock.calls[idx]).toEqual([experience.start_date, experience.end_date]);
        expect(component.childAt(idx).find('.experience-details').html().includes(expectedDetails)).toBe(true);
      });
    });
    
    it('should render the position held at each company', () => {
      component.instance().state.experiences.map((experience, idx) => {
        expect(component.childAt(idx).find('.experience-position').childAt(0).text()).toBe(experience.position);
      });
    });
    
    it('should render the tasks achieved at each company', () => {
      component.instance().state.experiences.map((experience, idx) => {
        const experienceTasksSection = component.childAt(idx).find('.experience-tasks > ul');
        experience.description.map((bulletPoint, idx) => {
          expect(experienceTasksSection.childAt(idx).text()).toBe(bulletPoint);
        });
      });
    });
  });
});