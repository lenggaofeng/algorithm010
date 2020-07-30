"use strict";
/**
 * https://leetcode-cn.com/problems/magic-index-lcci/
 */
function findMagicIndex(nums) {
    for (let i = 0; i < nums.length;) {
        if (nums[i] == i) {
            return i;
        }
        else if (nums[i] > i) {
            i = nums[i];
        }
        else {
            i++;
        }
    }
    return -1;
}
;
function findMagicIndex2(nums) {
    function helper(left, right) {
        if (left > right) {
            return -1;
        }
        const mid = left + ((right - left) >> 1);
        if (nums[mid] > mid) {
            let ans1 = helper(left, mid - 1);
            let ans2 = helper(nums[mid], right);
            return ans1 != -1 ? ans1 : ans2;
        }
        else if (nums[mid] < mid) {
            let ans1 = helper(left, nums[mid]);
            let ans2 = helper(mid + 1, right);
            return ans1 != -1 ? ans1 : ans2;
        }
        else {
            let ans1 = helper(left, mid - 1);
            return ans1 != -1 ? ans1 : mid;
        }
    }
    return helper(0, nums.length - 1);
}
;
console.log(findMagicIndex2([1, 1, 1]));
