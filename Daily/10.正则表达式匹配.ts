/*
 * @lc app=leetcode.cn id=10 lang=typescript
 *
 * [10] 正则表达式匹配
 */

import { Case, CaseArr, testWithResult } from "./Test";

/**
 * 
 * dp[i][j] 表示 s[0..i]与 p[0..j] 匹配
 * 那么 
 * 当 p[j] != "*", dp[i][j] = dp[i - 1][j - 1] && s[i] == s[j]
 * 当 p[j] == "*", 
 *          dp[i][j] = dp[i][j - 2] 当 s[i] != p[j - 1] 
 *          dp[i][j] = dp[i - 1][j] || dp[i][j - 2] 当 s[i] == p[j - 1] 
 * 
 * 初始条件 dp[0][0] = true
 */
// @lc code=start
function isMatch(s: string, p: string): boolean {
    const n = s.length;
    const m = p.length;
    const dp:boolean[][] = new Array(n + 1).fill(0).map(v=>new Array(m + 1).fill(false));
    function matchs(i:number, j:number){
        if(i == 0){return false;}
        if(p[j - 1] == "."){return true;}
        return s[i - 1] == p[j - 1];
    }

    dp[0][0] = true;
    for(let i = 0; i <= n; i++ ){
        for(let j = 1; j <= m; j++ ){
            if(p[j - 1] !== "*"){
                dp[i][j] = matchs(i, j) && dp[i - 1][j - 1];
            } else {
                dp[i][j] = dp[i][j - 2];
                if(matchs(i, j - 1) && dp[i - 1][j]){
                    dp[i][j] = true;
                }
            }
        }
    }

    return dp[n][m];
};
// @lc code=end

const cases:CaseArr<[string, string], boolean> = [
    // {input:["aa", "a"], output: false},
    {input:["aa", "a*"], output: true},
    {input:["aa", "a*a"], output: true},
    {input:["ab", ".*"], output: true},
    {input:["aab", "c*a*b"], output: true},
    {input:["mississippi", "mis*is*p*."], output: false},
];
testWithResult(cases, ([s,p])=>isMatch(s, p));

