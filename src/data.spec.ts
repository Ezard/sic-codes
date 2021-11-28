import { getData } from './data';

describe('Data', () => {
  describe('getData', () => {
    it('should return the list of SIC code data', () => {
      const result = getData();

      expect(result).toHaveLength(731);
      expect(result[0]).toHaveLength(2);
      expect(result[0][0]).toEqual('01110');
      expect(result[0][1]).toEqual('Growing of cereals (except rice), leguminous crops and oil seeds');
    });

    it('should load data from the JSON file the first time data is requested', () => {
      const factory = jest.fn().mockReturnValue([]);
      jest.isolateModules(() => {
        jest.mock('../data/data.json', factory);
        const { getData: getDataFn } = require('./data');

        getDataFn();

        expect(factory).toHaveBeenCalledTimes(1);
      });
    });

    it('should use cached data the second time data is requested', () => {
      const factory = jest.fn().mockReturnValue([]);
      jest.isolateModules(() => {
        jest.mock('../data/data.json', factory);
        const { getData: getDataFn } = require('./data');

        getDataFn();
        getDataFn();

        expect(factory).toHaveBeenCalledTimes(1);
      });
    });
  });
});
