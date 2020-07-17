"use strict";
/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
// @lc code=start
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = (left + right) >> 1;
        // console.log("--", left, right, mid, nums[mid], target);
        if (nums[mid] == target) {
            return mid;
        }
        else if (nums[mid] > target) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
}
;
// @lc code=end
// console.log(searchInsert([1, 3,5, 6], 7));
