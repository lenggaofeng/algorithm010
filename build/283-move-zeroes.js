"use strict";
/**
 Do not return anything, modify nums in-place instead.
 */
/**
 * 思路: 一遍过数组，将非0元素移动到前面，统计非0个数，第二遍把后面的置位0
 */
function moveZeroes(nums) {
    let nonZeroCnt = 0;
    for (let i = 0, l = nums.length; i < l; i++) {
        if (nums[i] == 0) {
            continue;
        }
        nums[nonZeroCnt++] = nums[i];
    }
    for (let i = nonZeroCnt, l = nums.length; i < l; i++) {
        nums[i] = 0;
    }
}
;
