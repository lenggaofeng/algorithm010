"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = null;
const numChars = "123456789";
function solveSudoku(board) {
    const m = board.length;
    const n = board[0].length;
    const base = (1 << 9) - 1;
    const bitsBoard = new Array(m).fill(0).map(v => new Array(n).fill(base));
    function setExcludeBits(i, j, testMask, mask) {
        if ((bitsBoard[i][j] & testMask) == 0) {
            return;
        }
        const bits = (bitsBoard[i][j] &= mask);
        if ((bits & (bits - 1)) == 0) {
            setValue(i, j, Math.log2(bits));
        }
    }
    function setValue(i, j, num) {
        //设置对应比特
        const testMask = bitsBoard[i][j] = 1 << num;
        const mask = ~testMask;
        //设置行
        for (let k = 0; k < n; k++) {
            if (k !== j) {
                setExcludeBits(i, k, testMask, mask);
            }
        }
        //设置列
        for (let k = 0; k < n; k++) {
            if (k !== i) {
                setExcludeBits(k, j, testMask, mask);
            }
        }
        //设置九宫
        const rowBase = Math.floor(i / 3) * 3;
        const colBase = Math.floor(j / 3) * 3;
        for (let row = rowBase; row < rowBase + 3; row++) {
            for (let col = colBase; col < colBase + 3; col++) {
                if (!(row == i && col == j)) {
                    setExcludeBits(row, col, testMask, mask);
                }
            }
        }
    }
    //calc
    const codeBase = "1".charCodeAt(0);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const c = board[i][j];
            if (c !== ".") {
                const num = c.charCodeAt(0) - codeBase;
                setValue(i, j, num);
            }
        }
    }
    //set result
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const c = board[i][j];
            if (c == ".") {
                const bits = bitsBoard[i][j];
                const num = Math.log2(bits);
                board[i][j] = numChars[num];
            }
        }
    }
}
;
// const arr = [
//     ["5","3",".",".","7",".",".",".","."],
//     ["6",".",".","1","9","5",".",".","."],
//     [".","9","8",".",".",".",".","6","."],
//     ["8",".",".",".","6",".",".",".","3"],
//     ["4",".",".","8",".","3",".",".","1"],
//     ["7",".",".",".","2",".",".",".","6"],
//     [".","6",".",".",".",".","2","8","."],
//     [".",".",".","4","1","9",".",".","5"],
//     [".",".",".",".","8",".",".","7","9"]
// ];
const arr = [
    [".", ".", "9", "7", "4", "8", ".", ".", "."],
    ["7", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", "2", ".", "1", ".", "9", ".", ".", "."],
    [".", ".", "7", ".", ".", ".", "2", "4", "."],
    [".", "6", "4", ".", "1", ".", "5", "9", "."],
    [".", "9", "8", ".", ".", ".", "3", ".", "."],
    [".", ".", ".", "8", ".", "3", ".", "2", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "6"],
    [".", ".", ".", "2", "7", "5", "9", ".", "."]
];
solveSudoku(arr);
console.log(arr);
