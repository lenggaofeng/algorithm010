"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 Do not return anything, modify board in-place instead.
 */
exports.default = null;
const tmp = "Y";
const sideX = [1, -1, 0, 0];
const sideY = [0, 0, 1, -1];
function solve(board) {
    let m = board.length;
    if (m <= 0) {
        return;
    }
    let n = board[0].length;
    if (n <= 0) {
        return;
    }
    function dfs(i, j) {
        const c = board[i][j];
        if (c == tmp || c == "X") {
            return;
        }
        board[i][j] = tmp;
        for (let k = 0; k < sideX.length; k++) {
            let ni = i + sideX[k];
            let nj = j + sideY[k];
            if (ni < 0 || ni >= m || nj < 0 || nj >= n) {
                continue;
            }
            dfs(ni, nj);
        }
    }
    //上下边界
    for (let i = 0; i < n; i++) {
        dfs(0, i);
        dfs(m - 1, i);
    }
    //左右边界
    for (let i = 1; i < m - 1; i++) {
        dfs(i, 0);
        dfs(i, n - 1);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == tmp) {
                board[i][j] = "O";
            }
            else if (board[i][j] == "O") {
                board[i][j] = "X";
            }
        }
    }
}
;
let a = [
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
];
solve(a);
console.log(a);
