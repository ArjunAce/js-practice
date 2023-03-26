
var rotate = function (matrix) {
    const getRotatedIndices = (i, j) => {
        return [j, matrix.length - 1 - i];
    }
    for (let k = 0; k < Math.floor(matrix.length / 2); k++) {
        for (let i = 0; i < matrix.length - 1 - 2 * k; i++) {
            let currentRow = k, currentCol = i + k;
            let temp1 = matrix[currentRow][currentCol], temp2;
            for (let j = 0; j < 4; j++) {
                const [newI, newJ] = getRotatedIndices(currentRow, currentCol);
                temp2 = matrix[newI][newJ];
                matrix[newI][newJ] = temp1;
                temp1 = temp2;
                [currentRow, currentCol] = [newI, newJ];
            };
        }
    }
    console.log(matrix);
}
rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
// [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
// rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]);
// [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
// rotate([[1]]);
// [[1]]
// rotate([[1, 2], [3, 4]]);
// [[3, 1], [4, 2]]