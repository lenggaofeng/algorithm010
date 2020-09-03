"use strict";
/**
 * https://leetcode-cn.com/problems/n-queens/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = null;
function solveNQueens(n) {
    let results = new Array();
    function dfs(row, states, cols, pies, nas) {
        if (row >= n) {
            const result = [];
            states.forEach(i => {
                result.push(".".repeat(i) + "Q" + ".".repeat(n - i - 1));
            });
            results.push(result);
            return;
        }
        let bits = (~(cols | pies | nas)) & ((1 << n) - 1);
        while (bits) {
            const p = bits & -bits;
            bits = bits & (bits - 1);
            states.push(Math.log2(p));
            dfs(row + 1, states, cols | p, (pies | p) << 1, (nas | p) >> 1);
            states.pop();
        }
    }
    dfs(0, [], 0, 0, 0);
    return results;
}
;
console.log(solveNQueens(4));
