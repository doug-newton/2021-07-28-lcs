export class LongestCommonSubsequenceSolver {
    matrix: number[][] = []

    topSet: string[]
    sideSet: string[]
    matrixWidth: number = -1
    matrixHeight: number = -1

    constructor(set1: string[], set2: string[]){
        this.topSet = set1
        this.sideSet = set2
        this.matrixWidth = set1.length + 1;
        this.matrixHeight = set2.length + 1;
        this.initMatrix()
    }

    printMatrix(): void {
        let topRow: string = ''

        topRow =  '     |'

        for (let c: number = 0; c < this.topSet.length; c++) {
            topRow += this.topSet[c] + ' |'
        }

        console.log(topRow)

        for (let r: number = 0; r < this.matrix.length; r++) {

            let line: string = ''

            if (r > 0) 
                line += this.sideSet[r - 1] + ' |'
            else
                line += '  |'


            for (let c: number = 0; c < this.matrix[0].length; c++) {
                line += this.matrix[r][c] + ' |'
            }

            console.log(line)

        }
    }

    initMatrix() {
        this.matrix = Array(this.matrixHeight).fill(null).map(() => Array(this.matrixWidth).fill(null));

        for (let r = 0; r < this.matrixHeight; r++) {
            this.matrix[r][0] = 0
        }

        for (let c = 0; c < this.matrixWidth; c++) {
            this.matrix[0][c] = 0
        }
    }

    result: string[] = []

    longestCommonSubsequence(): string[] {
        let highest: number = 0
        let hr: number = 0
        let hc: number = 0

        for (let c = 1; c < this.matrixWidth; c++) {

            for (let r = 1; r < this.matrixHeight; r++) {

                if (this.topSet[c - 1] === this.sideSet[r - 1]) {

                    this.matrix[r][c] = this.matrix[r - 1][c - 1] + 1

                    if (this.matrix[r][c] > highest)
                    {
                        highest = this.matrix[r][c]
                        hr = r
                        hc = c
                    }

                }
                else {

                    this.matrix[r][c] = this.matrix[r][c - 1]

                    if (this.matrix[r - 1][c] > this.matrix[r][c]) {
                        this.matrix[r][c] = this.matrix[r - 1][c]
                    }

                }
            }
        }

        let c = this.matrixWidth - 1
        let r = this.matrixHeight - 1

        this.result.push(this.topSet[c-1])

        return this.result;
    }
}
