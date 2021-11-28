import { getCode, getDescription } from './lookups';

describe('Lookups', () => {
  describe('getCode', () => {
    it('should return the code for the provided description if found', () => {
      const result = getCode('Information technology consultancy activities');

      expect(result).toEqual('62020');
    });

    it('should return undefined if the provided description was not found', () => {
      const result = getCode('Foo');

      expect(result).toBeUndefined();
    });
  });

  describe('getDescription', () => {
    it('should return the description for the provided code if found', () => {
      const result = getDescription('62020');

      expect(result).toEqual('Information technology consultancy activities');
    });

    it('should return undefined if the provided code was not found', () => {
      const result = getDescription('Bar');

      expect(result).toBeUndefined();
    });
  });
});
