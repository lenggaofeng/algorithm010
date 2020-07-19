"use strict";
/**
 * https://leetcode-cn.com/problems/maximal-square/
 */
/**
 * dp[i][j] =
 *     matrix[i][j] == 1 ? min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
 *     : 0;
 */
function maximalSquare(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    if (n == 0) {
        return 0;
    }
    let dp = Array.from(new Array(m), v => new Array(n).fill(0));
    let size = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 || j == 0) {
                dp[i][j] = +matrix[i][j];
            }
            else if (matrix[i][j] == '1') {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
            }
            size = Math.max(size, dp[i][j]);
        }
        console.log('--', size, dp[i]);
    }
    return size * size;
}
;
console.log(maximalSquare([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
]));
