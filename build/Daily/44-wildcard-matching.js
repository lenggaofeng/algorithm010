"use strict";
/**
 * https://leetcode-cn.com/problems/wildcard-matching/
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Test_1 = require("./Test");
/**
 * 思路： 直接用状态机来实现即可
 */
exports.default = null;
/**
 *
 * dp[i][j] 表示 s[...i] 与 p[...j] 匹配
 * 当 p != "*" 时, dp[i][j] = dp[i - 1][j - 1] && (p[j] == "?" || s[i] == p[j])
 * 当 p == "*" 时, dp[i][j] = dp[i - 1][j] || dp[i][j - 1]
 * dp[0][0] = true;
 */
function isMatch(s, p) {
    const n = s.length;
    const m = p.length;
    // let pre = false;
    const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(false));
    dp[0][0] = true;
    for (let i = 0; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (p[j - 1] == "*") {
                dp[i][j] = (i >= 1 && dp[i - 1][j]) || dp[i][j - 1];
            }
            else if (i == 0) {
                dp[i][j] = false;
            }
            else {
                dp[i][j] = (p[j - 1] == "?" || (s[i - 1] == p[j - 1])) && dp[i - 1][j - 1];
            }
        }
    }
    return dp[n][m];
}
;
const cases = [
    { input: ["aa", "a"], output: false },
    { input: ["aa", "*"], output: true },
    { input: ["aa", "?*"], output: true },
    { input: ["aa", "*?"], output: true },
    { input: ["abcdeb", "*a*b"], output: true },
    { input: ["acdcb", "a*c?b"], output: false },
];
Test_1.testWithResult(cases, ([s, p]) => isMatch(s, p));
