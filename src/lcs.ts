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

    }

    printMatrix(): void {
        let h: number = this.matrix.length
        for (let i = 0; i < h; i++) {
            let row: number[] = this.matrix[i]
            console.log(row)
        }
        console.log()
    }

    initMatrix() {
        this.matrix = Array(this.matrixWidth).fill(null).map(() => Array(this.matrixHeight).fill(null));

        for (let r = 0; r < this.matrixHeight; r++) {
            this.matrix[r][0] = 0
        }

        for (let c = 0; c < this.matrixWidth; c++) {
            this.matrix[0][c] = 0
        }
    }

    computeMatrix(): void {
        this.initMatrix()
        for (let c = 1; c < this.matrixWidth; c++) {
            for (let r = 1; r < this.matrixHeight; r++) {
                if (this.topSet[c - 1] == this.sideSet[r - 1]) {
                    this.matrix[r][c] = this.matrix[r - 1][c - 1] + 1
                }
                else {
                    this.matrix[r][c] = this.matrix[r][c - 1]
                    if (this.matrix[r - 1][c] > this.matrix[r][c]) {
                        this.matrix[r][c] = this.matrix[r - 1][c]
                    }
                }
            }
        }
    }

    longestCommonSubsequence(): string[] {
        this.computeMatrix()

        let len = this.matrix[this.matrixHeight - 1][this.matrixWidth - 1];
        let result: string[] = []

        let r = this.matrixHeight - 1;
        let c = this.matrixWidth - 1;

        while (r >= 1 || c >= 1) {
            let above: number = this.matrix[r - 1][c]
            let left: number = this.matrix[r][c - 1]

            if (above == left) {
                result.push(this.topSet[c])
                c--;
                r--;
            }
            else if (above > left) {
                r--;
            }
            else {
                c--;
            }
        }

        return ['']
    }
}
