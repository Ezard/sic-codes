import data from '../data/data.json';

export function getData(): [code: string, description: string][] {
  return data as [code: string, description: string][];
}
