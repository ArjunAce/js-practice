let board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

var isValidSudoku = function (board) {
    let set = new Set();

    const isNumberInSet = (number) => {
        if (number !== '.') {
            if (set.has(number)) {
                return true;
            }
            set.add(number);
        }
        return false;
    }

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (isNumberInSet(board[i][j])) {
                return false;
            }
        }
        set.clear();
    }

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (isNumberInSet(board[j][i])) {
                return false;
            }
        }
        set.clear();
    }
    let row = 0, col = 0, i = 0;
    while (i < 3) {
        for (let j = 0; j < 3; j++) {
            if (isNumberInSet(board[row * 3 + i][col * 3 + j])) {
                return false;
            }
        }
        if (i < 2) {
            i++;
        } else {
            set.clear();
            i = 0;
            col++;
            if (col === 3) {
                col = 0;
                row++;
            }
            if (row > 2) {
                break;
            }
        }
    }
    return true;
};

console.log(isValidSudoku(board));