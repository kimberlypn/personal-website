import React from 'react';
import {configure, shallow} from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import Project from './Project';

configure({adapter: new Adaptor()});

describe('Project test', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Project/>);
  });
  
  describe('when constructing Project', () => {
    it('should initialize the state', () => {
      expect(component.instance().state).toEqual({project: {}});
    });
  });
  
  describe('when rendering Project', () => {
    let state;
    describe('when there is no project to render', () => {
      beforeEach(() => {
        state = {};
        component.setState(state);
        component.update();
      });
      
      it('should only render the top-level div', () => {
        expect(component.children().length).toBe(0);
      });
    });
    
    describe('when there is a project to render', () => {
      let projectArrows, projectSection;
      beforeEach(() => {
        state = {
          nextProjectId: 'nextProjectId',
          prevProjectId: 'prevProjectId',
          project: {
            title: 'title',
            headline: 'headline',
            img_src: 'forbidden-island.png',
            type: 'type',
            collaborators: ['collaborator0', 'collaborator1'],
            technology: ['technology0', 'technology1']
          }
        };
        component.setState(state);
        component.update();
        projectArrows = component.find('.project-arrows > Memo(IconLink)');
        projectSection = component.childAt(0).childAt(1);
      });
      
      it('should render an icon that redirects to the previous project', () => {
        expect(projectArrows.get(0).props).toEqual({
          title: 'Previous',
          icon: 'fas fa-chevron-circle-left',
          link: `/projects/${component.instance().state.prevProjectId}`
        });
      });
      
      it('should render the project\'s title', () => {
        expect(projectSection.find('h1').text()).toBe(component.instance().state.project.title);
      });
      
      it('should render the project\'s headline', () => {
        expect(projectSection.find('.project-headline').text()).toBe(component.instance().state.project.headline);
      });
      
      it('should render an image of the project', () => {
        expect(projectSection.find('img').props()).toEqual({
          src: component.instance().state.project.img_src,
          alt: component.instance().state.project.title
        });
      });
      
      it('should render a "Details" header', () => {
        expect(projectSection.find('h3').get(0).props.children).toBe('Details');
      });
      
      it('should render the project\'s details', () => {
        const projectDetails = projectSection.find('.project-details').props().children;
        expect(projectDetails[0].props.children).toBe('Type: ');
        expect(projectDetails[1]).toBe(component.instance().state.project.type);
        expect(projectDetails[3].props.children).toBe('Collaborators: ');
        expect(projectDetails[4]).toBe(component.instance().state.project.collaborators.join(', '));
        expect(projectDetails[6].props.children).toBe('Technology: ');
        expect(projectDetails[7]).toBe(component.instance().state.project.technology.join(', '));
      });
      
      it('should render a "Summary" header', () => {
        expect(projectSection.find('h3').get(1).props.children).toBe('Summary');
      });
      
      it('should render a summary of the project', () => {
        expect(projectSection.find('Memo(ProjectSummaryRenderer)').props()).toEqual({
          projectTitle: component.instance().state.project.title
        });
      });
      
      describe('when the project has a GitHub repository', () => {
        beforeEach(() => {
          state.project.repo = 'repo';
          component.setState(state);
          component.update();
        });
        
        it('should render an icon that redirects to the GitHub repository', () => {
          expect(component.find('.project-links > Memo(IconLink)').props()).toEqual({
            title: 'Repo',
            icon: 'fab fa-github',
            link: component.instance().state.project.repo
          });
        });
      });
      
      describe('when the project has a demo', () => {
        beforeEach(() => {
          state.project.demo = 'demo';
          component.setState(state);
          component.update();
        });
        
        it('should render an icon that redirects to the demo', () => {
          expect(component.find('.project-links > Memo(IconLink)').props()).toEqual({
            title: 'Demo',
            icon: 'fas fa-play-circle',
            link: component.instance().state.project.demo
          });
        });
      });
      
      it('should render an icon that redirects to the next project', () => {
        expect(projectArrows.get(1).props).toEqual({
          title: 'Next',
          icon: 'fas fa-chevron-circle-right',
          link: `/projects/${component.instance().state.nextProjectId}`
        });
      });
    });
  });
});