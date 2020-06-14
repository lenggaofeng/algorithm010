"use strict";
/**
 Do not return anything, modify nums in-place instead.
 */
/**
 * 原数组为 ab, 目标数组为 ba
 * 假设 a' 为 a 翻转， 可观察到
 * ba = (a'b')'
 * */
function reverse(nums, start, end) {
    for (var i = start, j = end; i < j; i++, j--) {
        var tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
}
function rotate(nums, k) {
    var cnt = nums.length;
    k = k % cnt;
    var last = cnt - 1;
    var mid = cnt - k;
    reverse(nums, 0, mid - 1);
    reverse(nums, mid, last);
    reverse(nums, 0, last);
}
;
// let nums = [-1];
// let k = 2;
// rotate(nums, k );
// console.log(nums);
