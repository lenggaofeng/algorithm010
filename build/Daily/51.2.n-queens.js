"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//使用位运算， 回溯算法
/**
 *
 * que
 *
 */
exports.default = null;
function solveNQueens(n) {
    const results = [];
    function solve(index, states, queues, pie, na) {
        if (index == n) {
            const result = states.map(i => {
                return ".".repeat(i) + "Q" + ".".repeat(n - i - 1);
            });
            results.push(result);
            return;
        }
        let bits = (~(queues | pie | na)) & ((1 << n) - 1);
        while (bits) {
            const q = bits & -bits;
            bits = bits & (bits - 1);
            states.push(Math.log2(q));
            solve(index + 1, states, queues | q, (pie | q) << 1, (na | q) >> 1);
            states.pop();
        }
    }
    solve(0, [], 0, 0, 0);
    return results;
}
;
console.log(solveNQueens(4));
