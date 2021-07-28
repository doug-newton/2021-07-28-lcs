export function printMatrix(matrix: number[][]): void {
    let h: number = matrix.length
    for (let i = 0; i < h; i++) {
        let row: number[] = matrix[i]
        console.log(row)
    }
    console.log()
}

export function longestCommonSubsequence(set1: string[], set2: string[]): string[] {

    let w = set1.length + 1;
    let h = set2.length + 1;

    let matrix: number[][] = Array(set2.length + 1).fill(null).map(() => Array(set1.length + 1).fill(null));

    for (let r = 0; r < h; r++) {
        matrix[r][0] = 0
    }

    for (let c = 0; c < w; c++) {
        matrix[0][c] = 0
    }

    for (let c = 1; c < w; c++) {
        for (let r = 1; r < h; r++) {
            if (set1[c - 1] == set2[r - 1]) {
                //    top-left diagonal plus 1
                matrix[r][c] = matrix[r - 1][c - 1] + 1
            }
            else {
                //    max of cell to the left and cell above
                matrix[r][c] = matrix[r][c - 1]

                if (matrix[r - 1][c] > matrix[r][c]) {
                    matrix[r][c] = matrix[r - 1][c]
                }
            }
        }
    }

    let len = matrix[h - 1][w - 1];
    let result: string[] = []

    let r = h - 1;
    let c = w - 1;

    while (r >= 1 || c >= 1) {
        let above: number = matrix[r - 1][c]
        let left: number = matrix[r][c - 1]

        if (above == left) {
            result.push(set1[c])
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