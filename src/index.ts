import { LongestCommonSubsequenceSolver } from "./lcs"

let t: LongestCommonSubsequenceSolver = new LongestCommonSubsequenceSolver(
    ['A', 'G', 'G', 'T', 'A', 'B'],
    ['G', 'X', 'T', 'X', 'A', 'Y', 'B'],
)

t.longestCommonSubsequence()

t.printMatrix()
console.log(t.result)

//    ['G', 'T', 'A', 'B']