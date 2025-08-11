import { describe, it, expect } from 'vitest';
import { DurationFinder } from '../../Services/DateFormating';

describe('DurationFinder', () => {
  it('returns formatted duration for valid date', () => {
    const now = new Date();
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString();
    const result = DurationFinder(oneDayAgo);
    expect(result).toMatch(/day[s]? ago/);
  });

  it('returns "Invalid Date" for invalid input', () => {
    expect(DurationFinder('not-a-date')).toBe('Invalid Date');
  });
});
