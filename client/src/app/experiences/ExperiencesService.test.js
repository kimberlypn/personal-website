import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import ExperiencesService from './ExperiencesService';

const axiosMock = new MockAdapter(axios);

describe('ExperiencesService test', () => {
  describe('when "componentDidMount" is called', () => {
    let response;
    beforeEach(() => {
      ExperiencesService.setState = jest.fn();
      ExperiencesService.state = {experiences: []};
      axiosMock.onGet('/api/v1/experiences').reply(200, response = ['experience']);
      ExperiencesService.componentDidMount();
    });
    
    it('should send a request to fetch the experiences', () => {
      expect(axiosMock.history.get.length).toBe(1);
      expect(axiosMock.history.get[0].url).toBe('/api/v1/experiences');
    });
    
    it('should set the state with "experiences"', () => {
      expect(ExperiencesService.setState.mock.calls).toEqual([[{experiences: response}]]);
    });
  });
  
  describe('when "getDateRange" is called', () => {
    let dateRange;
    describe('when there is no end date', () => {
      beforeEach(() => {
        dateRange = ExperiencesService.getDateRange('2019/01/01');
      });
      
      it('should return the abbreviated start month and year and "Present" as the end date', () => {
        expect(dateRange).toBe('Jan \'19 - Present');
      });
    });
    
    describe('when the start and end years are the same', () => {
      beforeEach(() => {
        dateRange = ExperiencesService.getDateRange('2019/01/01', '2019/12/31');
      });
      
      it('should return the abbreviated start and end months and the same abbreviated year once', () => {
        expect(dateRange).toBe('Jan - Dec \'19');
      });
    });
    
    describe('when the start and end years are different', () => {
      beforeEach(() => {
        dateRange = ExperiencesService.getDateRange('2018/01/01', '2019/01/01');
      });
      
      it('should return the abbreviated start and end months and years', () => {
        expect(dateRange).toBe('Jan \'18 - Jan \'19');
      });
    });
  });
});