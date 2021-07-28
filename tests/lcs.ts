import { expect } from 'chai';
import { LongestCommonSubsequenceSolver } from '../src/lcs';

describe('longestCommonSubsequence', () => {
  
  it('should find longest common subsequence for two strings #1', () => {
    expect((new LongestCommonSubsequenceSolver([''], [''])).longestCommonSubsequence()).to.deep.equal(['']);
  });
  
  it('should find longest common subsequence for two strings #2', () => {
    expect((new LongestCommonSubsequenceSolver([''], ['A', 'B', 'C'])).longestCommonSubsequence()).to.deep.equal(['']);
  });
  
  it('should find longest common subsequence for two strings #3', () => {
    expect((new LongestCommonSubsequenceSolver(['A', 'B', 'C'], [''])).longestCommonSubsequence()).to.deep.equal(['']);
  });
  
  it('should find longest common subsequence for two strings #4', () => {
    expect((new LongestCommonSubsequenceSolver(
      ['A', 'B', 'C'],
      ['D', 'E', 'F', 'G'],
    )).longestCommonSubsequence()).to.deep.equal(['']);
  });
  
  it('should find longest common subsequence for two strings #5', () => {
    expect((new LongestCommonSubsequenceSolver(
      ['A', 'B', 'C', 'D', 'G', 'H'],
      ['A', 'E', 'D', 'F', 'H', 'R'],
    )).longestCommonSubsequence()).to.deep.equal(['A', 'D', 'H']);
  });
  
  it('should find longest common subsequence for two strings #6', () => {
    expect((new LongestCommonSubsequenceSolver(
      ['A', 'G', 'G', 'T', 'A', 'B'],
      ['G', 'X', 'T', 'X', 'A', 'Y', 'B'],
    )).longestCommonSubsequence()).to.deep.equal(['G', 'T', 'A', 'B']);
  });
  
  it('should find longest common subsequence for two strings #7', () => {
    expect((new LongestCommonSubsequenceSolver(
      ['A', 'B', 'C', 'D', 'A', 'F'],
      ['A', 'C', 'B', 'C', 'F'],
    )).longestCommonSubsequence()).to.deep.equal(['A', 'B', 'C', 'F']);
  });
});