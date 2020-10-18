"use strict";
/*
 * @lc app=leetcode.cn id=52 lang=typescript
 *
 * [52] N皇后 II
 */
// @lc code=start
function totalNQueens(n) {
    let count = 0;
    function helper(row, column, pie, na) {
        if (row == n) {
            count++;
            return;
        }
        let waits = (~(column | pie | na)) & ((1 << n) - 1);
        while (waits) {
            const p = waits & -waits;
            helper(row + 1, column | p, (pie | p) >> 1, (na | p) << 1);
            waits = waits & (waits - 1);
        }
    }
    helper(0, 0, 0, 0);
    return count;
}
;
// @lc code=end
console.log(totalNQueens(4));
