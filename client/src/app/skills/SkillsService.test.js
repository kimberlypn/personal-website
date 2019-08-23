import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import SkillsService from './SkillsService';

const axiosMock = new MockAdapter(axios);

describe('SkillsService test', () => {
  describe('when "componentDidMount" is called', () => {
    beforeEach(() => {
      SkillsService.setState = jest.fn();
      SkillsService.state = {};
      axiosMock.onGet('/api/v1/skills').reply(200, [
        {id: 0, type: 'Frameworks & Libraries'},
        {id: 1, type: 'Programming Languages'},
        {id: 2, type: 'Databases'},
        {id: 3, type: 'Frameworks & Libraries'}
      ]);
      SkillsService.componentDidMount();
    });
    
    it('should set the state with "skills" after grouping the skills by type and sorting the skills alphabetically by type', () => {
      expect(SkillsService.setState).toHaveBeenCalledTimes(1);
      expect(SkillsService.setState.mock.calls).toEqual([[{
        skills: [{
          skillType: 'programming languages',
          skills: [{id: 1, type: 'Programming Languages'}]
        }, {
          skillType: 'databases',
          skills: [{id: 2, type: 'Databases'}]
        }, {
          skillType: 'frameworks & libraries',
          skills: [{id: 0, type: 'Frameworks & Libraries'}, {id: 3, type: 'Frameworks & Libraries'}]
        }]
      }]]);
    });
  });
});