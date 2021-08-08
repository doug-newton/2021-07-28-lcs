import { expect } from 'chai'
import { LongestCommonSubsequenceSolver } from '../src/lcs'

class TestCases {

  testCases: string[][][] = [
    [[''], ['']],
    [[''], ['A', 'B', 'C']],
    [['A', 'B', 'C'], ['']],
    [['A', 'B', 'C'], ['D', 'E', 'F', 'G']],
    [['A', 'B', 'C', 'D', 'G', 'H'], ['A', 'E', 'D', 'F', 'H', 'R']],
    [['A', 'G', 'G', 'T', 'A', 'B'], ['G', 'X', 'T', 'X', 'A', 'Y', 'B']],
    [['A', 'B', 'C', 'D', 'A', 'F'], ['A', 'C', 'B', 'C', 'F']]
  ]

  getTestCase(n: number): LongestCommonSubsequenceSolver {
    return new LongestCommonSubsequenceSolver(
      this.testCases[n - 1][0], this.testCases[n - 1][1]
    )
  }

}

describe('longestCommonSubsequence', () => {

  let testCases: TestCases = new TestCases()

  it('should find longest common subsequence for two strings #1', () => {
    let lcs: LongestCommonSubsequenceSolver = testCases.getTestCase(1)
    let res: string[] = (lcs).longestCommonSubsequence()
    let msg: string = lcs.debugBuffer.join('\n')
    expect(res).to.deep.equal([''], msg)
  })

  it('should find longest common subsequence for two strings #2', () => {
    let lcs: LongestCommonSubsequenceSolver = testCases.getTestCase(2)
    let res: string[] = (lcs).longestCommonSubsequence()
    let msg: string = lcs.debugBuffer.join('\n')
    expect(res).to.deep.equal([''], msg)
  })

  it('should find longest common subsequence for two strings #3', () => {
    let lcs: LongestCommonSubsequenceSolver = testCases.getTestCase(3)
    let res: string[] = lcs.longestCommonSubsequence()
    let msg: string = lcs.debugBuffer.join('\n')
    expect(res).to.deep.equal([''], msg)
  })

  it('should find longest common subsequence for two strings #4', () => {
    let lcs: LongestCommonSubsequenceSolver = testCases.getTestCase(4)
    let res: string[] = lcs.longestCommonSubsequence()
    let msg: string = lcs.debugBuffer.join('\n')
    expect(res).to.deep.equal([''], msg)
  })

  it('should find longest common subsequence for two strings #5', () => {
    let lcs: LongestCommonSubsequenceSolver = testCases.getTestCase(5)
    let res: string[] = lcs.longestCommonSubsequence()
    let msg: string = lcs.debugBuffer.join('\n')
    expect(res).to.deep.equal(['A', 'D', 'H'], msg)
  })

  it('should find longest common subsequence for two strings #6', () => {
    let lcs: LongestCommonSubsequenceSolver = testCases.getTestCase(6)
    let res: string[] = (lcs).longestCommonSubsequence()
    let msg: string = lcs.debugBuffer.join('\n')
    expect(res).to.deep.equal(['G', 'T', 'A', 'B'], msg)
  })

  it('should find longest common subsequence for two strings #7', () => {
    let lcs: LongestCommonSubsequenceSolver = testCases.getTestCase(7)
    let res: string[] = lcs.longestCommonSubsequence()
    let msg: string = lcs.debugBuffer.join('\n')
    expect(res).to.deep.equal(['A', 'B', 'C', 'F'], msg)
  })
})