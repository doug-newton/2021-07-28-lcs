import { expect } from 'chai';
import { longestCommonSubsequence } from '../src/lcs';

describe('longestCommonSubsequence', () => {
  it('should find longest common subsequence for two strings', () => {
    expect(longestCommonSubsequence([''], [''])).to.deep.equal(['']);

    expect(longestCommonSubsequence([''], ['A', 'B', 'C'])).to.deep.equal(['']);

    expect(longestCommonSubsequence(['A', 'B', 'C'], [''])).to.deep.equal(['']);

    expect(longestCommonSubsequence(
      ['A', 'B', 'C'],
      ['D', 'E', 'F', 'G'],
    )).to.deep.equal(['']);

    expect(longestCommonSubsequence(
      ['A', 'B', 'C', 'D', 'G', 'H'],
      ['A', 'E', 'D', 'F', 'H', 'R'],
    )).to.deep.equal(['A', 'D', 'H']);

    expect(longestCommonSubsequence(
      ['A', 'G', 'G', 'T', 'A', 'B'],
      ['G', 'X', 'T', 'X', 'A', 'Y', 'B'],
    )).to.deep.equal(['G', 'T', 'A', 'B']);

    expect(longestCommonSubsequence(
      ['A', 'B', 'C', 'D', 'A', 'F'],
      ['A', 'C', 'B', 'C', 'F'],
    )).to.deep.equal(['A', 'B', 'C', 'F']);
  });
});