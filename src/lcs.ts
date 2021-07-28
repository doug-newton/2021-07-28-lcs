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
        let h: number = this.matrix.length
        for (let i = 0; i < h; i++) {
            let line: string = ''
            let row: number[] = this.matrix[i]
            for (let j = 0; j < row.length; j++) {
                line += row[j] + " |"
            }
            console.log(line)
        }
        console.log()
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
        for (let c = 1; c < this.matrixWidth; c++) {
            for (let r = 1; r < this.matrixHeight; r++) {
                if (this.topSet[c - 1] == this.sideSet[r - 1]) {
                    this.matrix[r][c] = this.matrix[r - 1][c - 1] + 1
                    this.result.push(this.topSet[c - 1])
                }
                else {
                    this.matrix[r][c] = this.matrix[r][c - 1]
                    if (this.matrix[r - 1][c] > this.matrix[r][c]) {
                        this.matrix[r][c] = this.matrix[r - 1][c]
                    }
                }
            }
        }
        if (this.result.length < 1) {
            this.result = ['']
        }
        return this.result;
    }
}
