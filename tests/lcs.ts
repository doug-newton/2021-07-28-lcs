import { expect } from 'chai'
import { LongestCommonSubsequenceSolver } from '../src/lcs'

describe('longestCommonSubsequence', () => {
  
  it('should find longest common subsequence for two strings #1', () => {
    let lcs: LongestCommonSubsequenceSolver = new LongestCommonSubsequenceSolver([''], [''])
    let res: string[] = (lcs).longestCommonSubsequence()
    let msg: string = lcs.debugBuffer.join('\n')
    expect(res).to.deep.equal([''], msg)
  })
  
  it('should find longest common subsequence for two strings #2', () => {
    let lcs: LongestCommonSubsequenceSolver = new LongestCommonSubsequenceSolver([''], ['A', 'B', 'C'])
    let res: string[] = (lcs).longestCommonSubsequence()
    let msg: string = lcs.debugBuffer.join('\n')
    expect(res).to.deep.equal([''], msg)
  })

  it('should find longest common subsequence for two strings #3', () => {
    let lcs: LongestCommonSubsequenceSolver = new LongestCommonSubsequenceSolver(['A', 'B', 'C'], [''])
    let res: string[] = lcs.longestCommonSubsequence()
    let msg: string = lcs.debugBuffer.join('\n')
    expect(res).to.deep.equal([''], msg)
  })

  it('should find longest common subsequence for two strings #4', () => {
    let lcs: LongestCommonSubsequenceSolver = new LongestCommonSubsequenceSolver( ['A', 'B', 'C'], ['D', 'E', 'F', 'G'],);
    let res: string[] = lcs.longestCommonSubsequence()
    let msg: string = lcs.debugBuffer.join('\n')
    expect(res).to.deep.equal([''], msg)
  })

  it('should find longest common subsequence for two strings #5', () => {
    let lcs: LongestCommonSubsequenceSolver = new LongestCommonSubsequenceSolver( ['A', 'B', 'C', 'D', 'G', 'H'], ['A', 'E', 'D', 'F', 'H', 'R'])
    let res: string[] = lcs.longestCommonSubsequence()
    let msg: string = lcs.debugBuffer.join('\n')
    expect(res).to.deep.equal(['A', 'D', 'H'], msg)
  })
  
  it('should find longest common subsequence for two strings #6', () => {
    let lcs: LongestCommonSubsequenceSolver = new LongestCommonSubsequenceSolver( ['A', 'G', 'G', 'T', 'A', 'B'], ['G', 'X', 'T', 'X', 'A', 'Y', 'B'])
    let res: string[] = (lcs).longestCommonSubsequence()
    let msg: string = lcs.debugBuffer.join('\n')
    expect(res).to.deep.equal(['G', 'T', 'A', 'B'])
  })
  
  it('should find longest common subsequence for two strings #7', () => {
    let lcs: LongestCommonSubsequenceSolver = new LongestCommonSubsequenceSolver( ['A', 'B', 'C', 'D', 'A', 'F'], ['A', 'C', 'B', 'C', 'F']);
    let res: string[] = lcs.longestCommonSubsequence()
    let msg: string = lcs.debugBuffer.join('\n')
    expect(res).to.deep.equal(['A', 'B', 'C', 'F'], msg)
  })
})