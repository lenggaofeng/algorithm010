/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
    let results:string[] = [];
    function helper(leftCnt:number, rightCnt:number, cache:string[]) {
        if(leftCnt == n && rightCnt == n){
            results.push(cache.join(""));
            return;
        }

        if(leftCnt < n){
            cache.push("(");
            helper(leftCnt + 1, rightCnt, cache);
            cache.pop();
        }

        if(rightCnt < leftCnt){
            cache.push(")");
            helper(leftCnt, rightCnt + 1, cache);
            cache.pop();
        }
    }

    helper(0, 0, []);
    return results;
};
// @lc code=end

console.log(generateParenthesis(3));



/**
 * 0-1背包问题：给定n种物品和一背包。物品 i 的重量似乎 wi，其价值为 vi，背包的容量为 c。
 * 问应该如何选择装入背包中的物品，使得装入背包中物品的总价值最大？
 * 
 * 
 * dp[i][j] 为 0..i 个物品，重量 c 时的最大价值。
 * 
 * 递推公式
 * dp[i][j] = dp[i - 1][j] || dp[i - 1][j - wi] + vi when c >= wi
 *            dp[i - 1][j]
 * 初始条件
 * dp[i][0] = 0; 任何物品， 0个时价值都为0
 * dp[0][w0] = v0;
 * 
 * 
 * 结果返回
 * dp[i][c] 
 */