"use strict";
/*
 * @lc app=leetcode.cn id=376 lang=typescript
 *
 * [376] 摆动序列
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Test_1 = require("./Test");
/**
 *
 * 划分为子问题。我们先选取一个元素作为摆动序列的开头。定好摆动序列的摆动方向。 然后求这个子序列的最大长度。
 * 迭代计算数组中每个元素即可。
 *
 */
// @lc code=start
function wiggleMaxLength(nums) {
    if (nums.length < 2) {
        return nums.length;
    }
    let maxLen = 0;
    function helper(start, lt) {
        let pre = nums[start];
        let max = 0;
        for (let i = start + 1, l = nums.length; i < l; i++) {
            if (pre == nums[i]) {
                continue;
            }
            const isLt = nums[i] - nums[start] < 0;
            if (isLt == lt) {
                max = Math.max(max, helper(i, !lt));
            }
        }
        return 1 + max;
    }
    for (let i = 0; i < nums.length - maxLen; i++) {
        let len = Math.max(helper(i, true), helper(i, false));
        if (len > maxLen) {
            maxLen = len;
        }
    }
    return maxLen;
}
;
// @lc code=end
/**
 * 动态规划
 * dp[i][0] 表示以 i 结束的递增最大子序列长度
 * dp[i][1] 表示以 i 结束的递减最大子序列长度
 *
 * dp[i][0] = max(dp[1 .. i][1]) + 1 如果 nums[i] > nums[x]
 * dp[i][1] = max(dp[1 .. i][0]) + 1 如果 nums[i] < nums[x]
 *
 * 初始条件, 所有值初始都为 1
 */
function wiggleMaxLengthDp(nums) {
    const n = nums.length;
    if (n < 2) {
        return n;
    }
    const dp = new Array(n).fill(0).map(v => [1, 1]);
    let maxLen = 1;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i][0] = Math.max(dp[i][0], dp[j][1] + 1);
            }
            else if (nums[i] < nums[j]) {
                dp[i][1] = Math.max(dp[i][1], dp[j][0] + 1);
            }
        }
        maxLen = Math.max(maxLen, dp[i][0], dp[i][1]);
    }
    return maxLen;
}
function wiggleMaxLengthGreedy(nums) {
    const n = nums.length;
    if (n < 2) {
        return n;
    }
    let prevdiff = nums[1] - nums[0];
    let count = prevdiff != 0 ? 2 : 1;
    for (let i = 2; i < nums.length; i++) {
        let diff = nums[i] - nums[i - 1];
        if ((diff > 0 && prevdiff <= 0) || (diff < 0 && prevdiff >= 0)) {
            count++;
            prevdiff = diff;
        }
    }
    return count;
}
const cases = [
    { input: [1, 7, 4, 9, 2, 5], output: 6 },
    { input: [1, 17, 5, 10, 13, 15, 10, 5, 16, 8], output: 7 },
    { input: [1, 2, 3, 4, 5, 6, 7, 8, 9], output: 2 },
    { input: [1, 2], output: 2 },
    { input: [1, 1], output: 1 },
    { input: [], output: 0 },
];
Test_1.testWithResult(cases, wiggleMaxLengthGreedy);
