/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
    nums.sort((a, b) => a - b);
    let result: number[][] = [];
    let n = nums.length;
    function dfs(start:number, sum:number, cache:number[]) {
        if (start == 4 && sum == target) {
            result.push(cache);
            return;
        }

        for (let i = start; i < n; i++){
            if (i + 4 - cache.length > n) { return; }
            if (i > start && nums[i] == nums[i - 1]) { continue; }
            
            if (i < n - 1 && sum + nums[i] + (3 - cache.length) * nums[i + 1] > target) {
                return;
            }
            if (i < n - 1 && sum + nums[i] + (3 - cache.length) * nums[n - 1] < target) {
                continue;
            }
            
            cache.push(nums[i]);
            dfs(i + 1, sum + nums[i], cache);
            cache.pop();
        }
    }

    dfs(0, 0, []);
    return result;
};
// @lc code=end

