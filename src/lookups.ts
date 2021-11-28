import { getData } from './data';

export function getCode(description: string): string | undefined {
  return getData().find(([, d]) => d === description)?.[0];
}

export function getDescription(code: string): string | undefined {
  return getData().find(([c]) => c === code)?.[1];
}
