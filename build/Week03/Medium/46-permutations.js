"use strict";
/**
 * https://leetcode-cn.com/problems/permutations/
 */
/** 思路1:  */
function permute(nums) {
    const result = [];
    const cnt = nums.length;
    function swap(i, j) {
        if (i == j) {
            return;
        }
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    function backtrack(index) {
        if (index >= cnt) {
            result.push(nums.slice());
            return;
        }
        for (let i = index; i < cnt; i++) {
            swap(i, index);
            backtrack(index + 1);
            swap(i, index);
        }
    }
    backtrack(0);
    return result;
}
;
permute([1, 2, 3, 4]);
