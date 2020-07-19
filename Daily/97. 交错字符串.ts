/**
 * https://leetcode-cn.com/problems/interleaving-string/
 */

 /**
  * 
  * 思路，
  * dp[i][j] 表示 s3[0-(i+j-1)] 由 s1[0-(i-1)] 和 s2[0-(j-1)]交错组成.
  * 
  * 则 dp[i][j] = (dp[i - 1][j] && s3[i+j-1] == s1[i-1]) 
  *             or (dp[i][j - 1] && s3[i+j-1] == s2[j-1]) 

  * 边界条件
  * dp[0][0] = true;
  */

// function isInterleave(s1: string, s2: string, s3: string): boolean {
//     if(s1.length + s2.length != s3.length){return false;}
//     let m = s1.length;
//     let n = s2.length;
//     let dp:boolean[][] = Array.from(new Array(m + 1), v=>new Array(n + 1).fill(false));
//     dp[0][0] = true;
//     for(let i = 0; i <= m; i++){
//         for(let j = 0; j <= n; j++){
//             if(i > 0 && dp[i - 1][j] && s3[i + j - 1] == s1[i- 1]){
//                 dp[i][j] = true;
//             }
//             if(j > 0 && dp[i][j - 1] && s3[i + j - 1] == s2[j- 1]){
//                 dp[i][j] = true;
//             }
//         }
//     }
//     return dp[m][n];
// };


function isInterleave(s1: string, s2: string, s3: string): boolean {
    if(s1.length + s2.length != s3.length){return false;}
    let m = s1.length;
    let n = s2.length;
    let dp:boolean[] = new Array(n + 1).fill(false);
    dp[0] = true;
    for(let i = 0; i <= m; i++){
        for(let j = 0; j <= n; j++){
            if(i > 0){
                dp[j] = dp[j] && s3[i + j - 1] == s1[i- 1]
            }
            if(j > 0){
                dp[j] = dp[j] || dp[j - 1] && s3[i + j - 1] == s2[j- 1];
            }
        }
    }
    return dp[n];
};
console.log(isInterleave("aabcc",
"dbbca",
"aadbbcbcac"))