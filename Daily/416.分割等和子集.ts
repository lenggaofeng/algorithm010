/*
 * @lc app=leetcode.cn id=416 lang=typescript
 *
 * [416] 分割等和子集
 */

/**
 * 
 * dp[i][j] 表示在[0..i] 中选任意个数，是否能等于 j
 * 
 * i >= 0 && i < n
 * j >= 0 && j < target
 * 
 * 对于 j >= nums[i] 
 * dp[i][j] = dp[i-1][j] || dp[i-1][j - nums[i]]
 * 对于 j < nums[i]
 * dp[i][j] = dp[i - 1][j]
 * 
 * 初始条件
 * dp[0..n-1][0] = true
 * dp[0][nums[0]] = true
 * 
 * 
 */

// @lc code=start
function canPartition(nums: number[]): boolean {
    if(nums.length < 2){return false;}
    let sum = nums.reduce((a,b)=>a+b, 0);
    if(sum % 2 != 0){return false;}
    let max = Math.max(...nums);
    let target = sum / 2;
    if(max > target){return false;}
    if(max == target){return true;}

    let n = nums.length;
    let dpnew:boolean[] = new Array(target + 1).fill(false);
    let dp:boolean[] = new Array(target + 1).fill(false);
    dp[nums[0]] = true;
    dp[0] = true;
    for(let i = 1; i < n; i++){
        dpnew[0] = true;
        for(let j = 1; j <= target; j++){
            dpnew[j] = dp[j];
            if(j >= nums[i] && !dpnew[j]){
                dpnew[j] = dp[j - nums[i]];
            }
        }
        let tmp = dp;
        dp = dpnew;
        dpnew = tmp;
    }

    return dp[target];
};
// @lc code=end

