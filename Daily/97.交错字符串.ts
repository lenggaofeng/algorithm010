/*
 * @lc app=leetcode.cn id=97 lang=typescript
 *
 * [97] 交错字符串
 * 
 * dp[i][j] = (dp[i - 1][j] && s1[i - 1] == s3[i + j - 1])
 *           || (dp[i][j - 1] && s2[j - 1] == s3[i + j - 1])
 */

// @lc code=start
function isInterleave(s1: string, s2: string, s3: string): boolean {
    if(s1.length + s2.length != s3.length){
        return false;
    }

    const n = s1.length;
    const m = s2.length;
    let dp = new Array(m + 1).fill(false);
    dp[0] = true;
    for(let i = 0; i <= n; i++){
        for(let j = 0; j <= m; j++){
            if(i > 0){
                dp[j] = dp[j] && s1[i - 1] == s3[i + j - 1];
            }
            if(!dp[j] && j > 0){
                dp[j] = dp[j - 1] && s2[j - 1] == s3[i + j - 1];
            }
        }
    }
    return dp[m];
};
// @lc code=end

let s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac";
console.log(isInterleave(s1, s2, s3));

