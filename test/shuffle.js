import { shuffle } from '../../src/js/main.js';
import { expect } from 'chai';

describe('shuffle()', () => {
  it('should return an array of the same length', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = shuffle(arr);
    expect(result).to.have.lengthOf(arr.length);
  });

  it('should contain the same elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = shuffle(arr);
    expect(result).to.include.members(arr);
  });

  it('should actually shuffle (probabilistic)', () => {
    const arr = Array.from({ length: 100 }, (_, i) => i);
    const seen = new Set();
    for (let i = 0; i < 50; i++) {
      const shuffled = shuffle(arr);
      seen.add(shuffled.join(','));
    }
    expect(seen.size).to.be.greaterThan(1);
  });
});