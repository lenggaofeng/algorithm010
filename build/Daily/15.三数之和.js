"use strict";
/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Test_1 = require("./Test");
// @lc code=start
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const results = [];
    const n = nums.length;
    function helper(low, sum, cache) {
        if (cache.length == 3) {
            if (sum == 0) {
                results.push(cache.slice());
            }
            return;
        }
        for (let i = low + 1; i < n; i++) {
            if (i != low + 1 && nums[i] == nums[i - 1]) {
                continue;
            }
            if (i < n - 1 && sum + nums[i] + (2 - cache.length) * nums[i + 1] > 0) {
                return;
            }
            if (i < n - 1 && sum + nums[i] + (2 - cache.length) * nums[n - 1] < 0) {
                continue;
            }
            cache.push(nums[i]);
            helper(i, sum + nums[i], cache);
            cache.pop();
        }
    }
    helper(-1, 0, []);
    return results;
}
;
function threeSumIt(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const results = [];
    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        let j = i + 1;
        if (nums[i] + nums[j] > 0) {
            return;
        }
        let k = n - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum == 0) {
                results.push([nums[i], nums[j], nums[k]]);
                break;
            }
            else if (sum < 0) {
                j++;
            }
            else {
                k--;
            }
        }
    }
    return results;
}
;
// @lc code=end
const cases = [
    { input: [-1, 0, 1, 2, -1, -4], output: [
            [-1, 0, 1],
            [-1, -1, 2]
        ] }
];
Test_1.testWithResult(cases, threeSum);
