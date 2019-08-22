import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import ProjectService from './ProjectService';

const axiosMock = new MockAdapter(axios);

describe('ProjectService test', () => {
  describe('when "componentDidMount" is called', () => {
    let response;
    beforeEach(() => {
      ProjectService.setState = jest.fn();
      ProjectService.state = {};
    });
    
    describe('when the request to fetch the projects returns no projects', () => {
      beforeEach(() => {
        ProjectService.props = {projectId: 0};
        axiosMock.onGet('/api/v1/projects').reply(200, response = []);
        ProjectService.componentDidMount();
      });
      
      it('should not set the state', () => {
        expect(ProjectService.setState).not.toHaveBeenCalled();
      });
    });
    
    describe('when the request to fetch the projects returns 1 project', () => {
      beforeEach(() => {
        ProjectService.props = {projectId: 0};
        axiosMock.onGet('/api/v1/projects').reply(200, response = [{id: 0}]);
        ProjectService.componentDidMount();
      });
      
      it('should set "prevProjectId" and "nextProjectId" as the project\'s id and "project" in the state', () => {
        expect(ProjectService.setState.mock.calls).toEqual([[{
          nextProjectId: response[0].id,
          prevProjectId: response[0].id,
          project: response[0]
        }]]);
      });
    });
    
    describe('when the request to fetch the projects returns 2 projects', () => {
      beforeEach(() => {
        ProjectService.props = {projectId: 0};
        axiosMock.onGet('/api/v1/projects').reply(200, response = [{id: 0}, {id: 1}]);
        ProjectService.componentDidMount();
      });
      
      it('should set "prevProjectId" and "nextProjectId" as the same project\'s id and "project" in the state', () => {
        expect(ProjectService.setState.mock.calls).toEqual([[{
          nextProjectId: response[1].id,
          prevProjectId: response[1].id,
          project: response[0]
        }]]);
      });
    });
    
    describe('when the request to fetch the projects returns more than 2 projects', () => {
      beforeEach(() => {
        response = [{id: 0}, {id: 1}, {id: 2}];
        axiosMock.onGet('/api/v1/projects').reply(200, response);
      });
      
      describe('when the project is the last', () => {
        beforeEach(() => {
          ProjectService.props = {projectId: 2};
          ProjectService.componentDidMount();
        });
        
        it('should set the previous project\'s id as "prevProjectId", the first project\'s id as "nextProjectId", and "project" in the state', () => {
          expect(ProjectService.setState.mock.calls).toEqual([[{
            nextProjectId: response[0].id,
            prevProjectId: response[1].id,
            project: response[2]
          }]]);
        });
      });
      
      describe('when the project is the first', () => {
        beforeEach(() => {
          ProjectService.props = {projectId: 0};
          ProjectService.componentDidMount();
        });
        
        it('should set the last project\'s id as "prevProjectId", the next project\'s id as "nextProjectId", and "project" in the state', () => {
          expect(ProjectService.setState.mock.calls).toEqual([[{
            nextProjectId: response[1].id,
            prevProjectId: response[2].id,
            project: response[0]
          }]]);
        });
      });
      
      describe('when the project is neither first nor last', () => {
        beforeEach(() => {
          ProjectService.props = {projectId: 1};
          ProjectService.componentDidMount();
        });
        
        it('should set the previous project\'s id as "prevProjectId", the next project\'s id as "nextProjectId", and "project" in the state', () => {
          expect(ProjectService.setState.mock.calls).toEqual([[{
            nextProjectId: response[2].id,
            prevProjectId: response[0].id,
            project: response[1]
          }]]);
        });
      });
    });
  });
});