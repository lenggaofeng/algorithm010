"use strict";
/*
 * @lc app=leetcode.cn id=120 lang=typescript
 *
 * [120] 三角形最小路径和
 */
// @lc code=start
function minimumTotal(triangle) {
    if (!triangle.length) {
        return 0;
    }
    const rowCnt = triangle.length;
    let dp = new Array(rowCnt);
    dp[0] = triangle[0][0];
    for (let i = 1; i < rowCnt; i++) {
        const row = triangle[i];
        let left = dp[0];
        let colCnt = row.length;
        for (let j = 0; j < colCnt; j++) {
            if (j == 0) {
                dp[j] = left + row[j];
            }
            else if (j == colCnt - 1) {
                dp[j] = left + row[j];
            }
            else {
                let oldI = dp[j];
                dp[j] = Math.min(dp[j], left) + row[j];
                left = oldI;
            }
        }
        // console.log(dp);
    }
    return Math.min(...dp);
}
;
// @lc code=end
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
