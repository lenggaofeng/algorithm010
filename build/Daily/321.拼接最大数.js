"use strict";
/*
 * @lc app=leetcode.cn id=321 lang=typescript
 *
 * [321] 拼接最大数
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Test_1 = require("./Test");
// @lc code=start
function merge(nums1, nums2) {
    let result = [];
    while (nums1.length && nums2.length) {
        if (max(nums1, nums2) == nums1) {
            result.push(nums1[0]);
            nums1.shift();
        }
        else {
            result.push(nums2[0]);
            nums2.shift();
        }
    }
    result = result.concat(...nums1, ...nums2);
    return result;
}
function max(num1, num2) {
    let n = Math.min(num1.length, num2.length);
    for (let i = 0; i < n; i++) {
        if (num1[i] == num2[i]) {
            continue;
        }
        if (num1[i] > num2[i]) {
            return num1;
        }
        return num2;
    }
    return num1.length > num2.length ? num1 : num2;
    ;
}
function getMaxInArray(nums, k) {
    let stack = new Array();
    let drop = nums.length - k;
    for (let i = 0; i < nums.length; i++) {
        while (drop && stack.length && stack[stack.length - 1] < nums[i]) {
            stack.pop();
            drop--;
        }
        stack.push(nums[i]);
    }
    stack = stack.slice(0, k);
    return stack;
}
function maxNumber(nums1, nums2, k) {
    let result = [];
    for (let i = 0; i <= k; i++) {
        if (i > nums1.length || k - i > nums2.length) {
            continue;
        }
        let temp = merge(getMaxInArray(nums1, i), getMaxInArray(nums2, k - i));
        result = max(result, temp);
    }
    return result;
}
;
// @lc code=end
const cases = [
    { input: [[3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5], output: [9, 8, 6, 5, 3] },
    { input: [[6, 7], [6, 0, 4], 5], output: [6, 7, 6, 0, 4] },
    { input: [[3, 9], [8, 9], 3], output: [9, 8, 9] },
    { input: [[5, 7, 3], [4, 2, 3], 3], output: [7, 4, 3] },
    { input: [[6, 3, 9, 0, 5, 6], [2, 2, 5, 2, 1, 4, 4, 5, 7, 8, 9, 3, 1, 6, 9, 7, 0], 23],
        output: [6, 3, 9, 2, 2, 5, 2, 1, 4, 4, 5, 7, 8, 9, 3, 1, 6, 9, 7, 0, 5, 6, 0] },
];
Test_1.testWithResult(cases, ([nums1, nums2, k]) => maxNumber(nums1, nums2, k), (a, b) => {
    if (a.length != b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            return false;
        }
    }
    return true;
});
