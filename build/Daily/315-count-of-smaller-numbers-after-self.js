"use strict";
/**
 * https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = null;
//思路1: 暴力求解， 对于每个数， 计算一遍右侧小于它的数
function countSmaller(nums) {
    let n = nums.length;
    let counts = new Array(n);
    for (let i = 0; i < n; i++) {
        let v = nums[i];
        let cnt = 0;
        for (let j = i + 1; j < n; j++) {
            if (nums[j] < v) {
                cnt++;
            }
        }
        counts[i] = cnt;
    }
    return counts;
}
;
//思路1: 二分查找， 从后往前， 维护一个有序的数组  [5,1,2,6]
function binarySearch(nums, target, left, right) {
    while (left < right) {
        let mid = (left + right) >> 1;
        if (target > nums[mid]) {
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }
    if (nums[left] < target) {
        return left + 1;
    }
    return left;
}
function insert(nums, src, target) {
    let val = nums[src];
    for (let i = src; i < target; i++) {
        nums[i] = nums[i + 1];
    }
    nums[target] = val;
}
function countSmaller2(nums) {
    let n = nums.length;
    let counts = new Array(n);
    if (n == 1) {
        return [0];
    }
    counts[n - 1] = 0;
    for (let i = n - 2; i >= 0; i--) {
        let v = nums[i];
        let index = binarySearch(nums, v, i + 1, n - 1) - 1;
        insert(nums, i, index);
        counts[i] = index - i;
    }
    return counts;
}
;
0 - 10;
5;
0 - 4;
2;
2;
