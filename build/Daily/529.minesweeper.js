"use strict";
const stepX = [0, 0, 1, 1, -1, -1, 1, -1];
const stepY = [1, -1, 1, -1, 1, -1, 0, 0];
function updateBoard(board, click) {
    const [i, j] = click;
    if (board[i][j] == "M") {
        board[i][j] = "X";
        return board;
    }
    const m = board.length;
    const n = board[0].length;
    const queue = [];
    queue.push(click);
    while (queue.length) {
        const first = queue.shift();
        const [i, j] = first;
        const sides = [];
        let count = 0;
        for (let k = 0, l = stepX.length; k < l; k++) {
            const ni = i + stepX[k];
            const nj = j + stepY[k];
            if (ni >= 0 && ni < m && nj >= 0 && nj < n) {
                const nc = board[ni][nj];
                if (nc == "E") {
                    sides.push(k);
                }
                else if (nc == "M") {
                    count++;
                }
            }
        }
        if (count == 0) {
            board[i][j] = "B";
            sides.forEach(v => {
                board[i + stepX[v]][j + stepY[v]] = "F";
                queue.push([i + stepX[v], j + stepY[v]]);
            });
        }
        else {
            board[i][j] = `${count}`;
        }
    }
    return board;
}
;
// console.log(updateBoard([['E', 'E', 'E', 'E', 'E'],
// ['E', 'E', 'M', 'E', 'E'],
// ['E', 'E', 'E', 'E', 'E'],
// ['E', 'E', 'E', 'E', 'E']], [3, 0]));
// console.log(updateBoard([['B', '1', 'E', '1', 'B'],
// ['B', '1', 'M', '1', 'B'],
// ['B', '1', '1', '1', 'B'],
// ['B', 'B', 'B', 'B', 'B']], [1, 2]))
const board = new Array(50).fill(0).map(v => new Array(50).fill("E"));
console.log(updateBoard(board, [29, 2]));
