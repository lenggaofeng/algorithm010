/*
 * @lc app=leetcode.cn id=330 lang=typescript
 *
 * [330] 按要求补齐数组
 */

import { Case, testWithResult } from "./Test";

/**
 * 
 * 看的官方题解。 
 * 假设 miss 是缺少的数字中最小的。 那么 [1, miss) 已经覆盖到。 
 * 因为如果有比 miss 还小的数字 x 没有覆盖到， 那么我们就必须要增加一个小于等于 x 的数字来保证 x 被覆盖。 这与假设 “miss 是缺少的数字中最小的” 矛盾。 所以 [1, miss) 已经被覆盖到
 * 
 * 为了覆盖到 miss , 我们必须要补充一个 小于等于 miss 的数字 x。 可知，增加了 x 之后，覆盖范围为 [1, miss), [x, x + miss)。 为了使覆盖范围最大，因为 x <= miss, 所以新增加的数字应该是 miss, 新的覆盖范围为 [1, miss + miss)。
 * 当新的覆盖范围大于目标值 n 时， 迭代结束。
 */
// @lc code=start
function minPatches(nums: number[], n: number): number {
    let miss = 1;
    let index = 0;
    let cnt = 0;
    while (miss <= n) {
        if (index < nums.length && nums[index] <= miss) {
            miss += nums[index];
            index++;
        } else {
            miss += miss;
            cnt++;
        }
    }
    return cnt;
};
// @lc code=end

const cases: Case<[number[], number], number>[] = [
    // { input: [[1, 3], 6], output: 1 },
    // { input: [[1, 5, 10], 20], output: 2 },
    { input: [[], 7], output: 3 },
];

testWithResult(cases, ([nums, n]) => minPatches(nums, n));
