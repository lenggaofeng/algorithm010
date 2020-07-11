"use strict";
/**
 * https://leetcode-cn.com/problems/unique-paths-ii/
 */
// 思路, 动态规划  dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
function uniquePathsWithObstacles(obstacleGrid) {
    if (obstacleGrid[0][0]) {
        return 0;
    }
    let row = obstacleGrid.length;
    let col = obstacleGrid[0].length;
    let dp = new Array(col);
    for (let j = 0; j < col; j++) {
        dp[j] = 0;
    }
    dp[0] = obstacleGrid[0][0] ? 0 : 1;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (obstacleGrid[i][j]) {
                dp[j] = 0;
            }
            else if (j > 0) {
                dp[j] += dp[j - 1];
            }
        }
    }
    return dp[col - 1];
}
;
/**
 *
 *
 * [
 * [0,0],
 * [1,1],
 * [0,0]
 * ]

1,1
0,0

 

 */
