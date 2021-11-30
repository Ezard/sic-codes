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

    it('should load data from the JSON file', () => {
      const factory = jest.fn().mockReturnValue([]);
      jest.isolateModules(() => {
        jest.mock('../data/data.json', factory);
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const { getData: getDataFn } = require('./data');

        getDataFn();

        expect(factory).toHaveBeenCalledTimes(1);
      });
    });
  });
});
