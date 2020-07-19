"use strict";
/**
 *
 * https://leetcode-cn.com/problems/minimum-path-sum/
 */
/**
 * 状态转移方程：
 * dp[i][j] = min(dp[i][j-1], dp[i-1][j]) + num[i][j]
 */
function minPathSum(grid) {
    let colCnt = grid[0].length;
    if (colCnt == 0) {
        return 0;
    }
    let dp = grid[0].slice();
    let rowCnt = grid.length;
    for (let i = 1; i < rowCnt; i++) {
        let row = grid[i];
        dp[0] += row[0];
        for (let j = 1; j < colCnt; j++) {
            dp[j] = Math.min(dp[j - 1], dp[j]) + row[j];
        }
    }
    return dp[colCnt - 1];
}
;
console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
