"use strict";
/**
 * https://leetcode-cn.com/problems/unique-paths/
 */
/**
 * 思路: dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
 */
function uniquePaths(m, n) {
    let dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = 0;
    }
    dp[0] = 1;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (j > 0) {
                dp[j] += dp[j - 1];
            }
        }
    }
    return dp[n - 1];
}
;
