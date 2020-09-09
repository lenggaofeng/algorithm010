/*
 * @lc app=leetcode.cn id=64 lang=typescript
 *
 * [64] 最小路径和
 */
export default null;
// @lc code=start
function minPathSum(grid: number[][]): number {
    if(grid.length <= 0){return 0;}
    let rowCnt = grid.length;
    let colCnt = grid[0].length;
    if(colCnt == 0){return 0;}

    let dp = new Array(colCnt).fill(0);
    dp[0] = grid[0][0];
    for(let i = 0; i < rowCnt; i++){
        for(let j = 0; j < colCnt; j++){
            let val = grid[i][j];
            if(i == 0){
                if(j > 0){
                    dp[j] = dp[j - 1] + val;
                }
            } else if (j == 0){
                dp[j] += val;
            } else {
                dp[j] = Math.min(dp[j], dp[j - 1]) + val;
            }
        }
    }
    return dp[colCnt - 1];
};
// @lc code=end

console.log(minPathSum([
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ]))

