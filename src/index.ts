import { LongestCommonSubsequenceSolver } from "./lcs"

let lcs: LongestCommonSubsequenceSolver = new LongestCommonSubsequenceSolver(
    ['A', 'B', 'C'],
    ['D', 'E', 'F', 'G'],
)

let result: string[] = lcs.longestCommonSubsequence()

console.log('see');