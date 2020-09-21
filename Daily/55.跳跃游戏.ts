/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
function canJump(nums: number[]): boolean {
    if (nums.length <= 1) { return true;}
    let max = 0;
    const n = nums.length;
    for (let i = 0; i < n; i++){
        if (max < i) {
            return false;
        }

        let newMax = i + nums[i];
        if (newMax > max) {
            if (newMax >= n - 1) {
                return true;
            }
            max = newMax;
        }
    }
    return false;
};
// @lc code=end

