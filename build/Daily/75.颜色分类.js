"use strict";
/*
 * @lc app=leetcode.cn id=75 lang=typescript
 *
 * [75] 颜色分类
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Test_1 = require("./Test");
// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
    const counts = new Array(3).fill(0);
    nums.forEach(v => {
        counts[v]++;
    });
    let index = 0;
    counts.forEach((count, num) => {
        for (let i = 0; i < count; i++) {
            nums[index++] = num;
        }
    });
}
;
// @lc code=end
function sortColors2(nums) {
    const n = nums.length;
    let p0 = 0;
    let p2 = n - 1;
    for (let i = 0; i <= p2; i++) {
        if (nums[i] == 0) {
            let target = nums[p0];
            nums[p0++] = nums[i];
            nums[i] = target;
        }
        else if (nums[i] == 2) {
            let target = nums[p2];
            nums[p2--] = nums[i];
            nums[i] = target;
            i--;
        }
    }
}
function swap(nums, index1, index2) {
    let temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
}
function partition(nums, start, end) {
    let pivot = nums[start];
    let lt = start;
    let rt = end;
    while (lt < rt) {
        while (lt < rt && nums[rt] >= pivot) {
            rt--;
        }
        if (lt < rt) {
            nums[lt++] = nums[rt];
        }
        while (lt < rt && nums[lt] < pivot) {
            lt++;
        }
        if (lt < rt) {
            nums[rt--] = nums[lt];
        }
    }
    nums[lt] = pivot;
    return lt;
}
function sortColorsQuickSort(nums) {
    function helper(nums, start, end) {
        if (start >= end) {
            return;
        }
        const index = partition(nums, start, end);
        helper(nums, start, index - 1);
        helper(nums, index + 1, end);
    }
    helper(nums, 0, nums.length - 1);
}
const cases = [
    [2, 0, 2, 1, 1, 0],
    [0, 1],
];
Test_1.testWithCheck(cases, (input) => { sortColorsQuickSort(input); return input; }, (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
});
