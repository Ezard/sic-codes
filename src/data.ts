let data: [code: string, description: string][] | undefined;

export function getData(): [code: string, description: string][] {
  data = data ?? require('../data/data.json') as [code: string, description: string][];
  return data;
}
