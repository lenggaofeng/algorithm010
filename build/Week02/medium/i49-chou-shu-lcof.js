"use strict";
// [参考题解](https://leetcode-cn.com/problems/chou-shu-lcof/solution/chou-shu-ii-qing-xi-de-tui-dao-si-lu-by-mrsate/)
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = null;
function nthUglyNumber(n) {
    let a = 0, b = 0, c = 0;
    let dp = new Array(n);
    dp[0] = 1;
    for (let i = 1; i < n; i++) {
        let n2 = dp[a] * 2;
        let n3 = dp[b] * 3;
        let n5 = dp[c] * 5;
        dp[i] = Math.min(Math.min(n2, n3), n5);
        if (dp[i] == n2)
            a++;
        if (dp[i] == n3)
            b++;
        if (dp[i] == n5)
            c++;
    }
    return dp[n - 1];
}
