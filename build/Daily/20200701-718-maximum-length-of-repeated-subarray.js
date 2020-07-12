"use strict";
/**
 * https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/
 */
function findLength(A, B) {
    const dp = [];
    for (let i = -1; i < A.length; i++) {
        dp[i] = 0;
    }
    let max = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (A[i] == B[j]) {
                const cnt = dp[i] = dp[i - 1] + 1;
                if (cnt > max) {
                    max = cnt;
                }
            }
            else {
                dp[i] = 0;
            }
        }
    }
    return max;
}
;
/**
 *
 *
 * dp[i][j] 为已 a[i-1] 与 b[j-1] 结尾的字符串的最长公共子序列
 *
 * if(a[i - 1] == b[j - 1])
 * {
 *      dp[i][j] = dp[i-1][j-1] + 1
 * } else {
 *      dp[i][j] = 0;
 * }
 *
 * A[i-j-1] == B[m- n - 1]
 *
 * A[j] == B[n]
 *     A[i-j] == B[m-n]
 *
 *
 *
 *
 */ 
