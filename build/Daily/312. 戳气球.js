"use strict";
/**
 *
 * https://leetcode-cn.com/problems/burst-balloons/
 */
/**
 *
 * 参考官方题解：
 * 反向思考, 令 solve(i,j) 为开区间的最大硬币数
 * 当 i >= j - 1 时, solve(i,j) = 0;
 * 当 i < j - 1 时， 假设 mid 为第一个插入的元素, 则此时， solve(i,j) = i * mid * j,
 * 考虑继续往中间插入，问题可以简化为子问题： solve(i, j) = solve(i, mid) + solve(mid, j) + i * j * mid;
 */
function maxCoins(nums) {
    let n = nums.length;
    nums[-1] = nums[n] = 1;
    let cache = [];
    function solve(start, end) {
        if (cache[start] && cache[start][end]) {
            return cache[start][end];
        }
        let result = 0;
        let muitlBase = nums[start] + nums[end];
        for (let i = start + 1; i < end; i++) {
            result = Math.max(solve(start, i) + solve(i, end) + muitlBase * nums[i]);
        }
        if (!cache[start]) {
            cache[start] = [];
        }
        cache[start][end] = result;
        return result;
    }
    return solve(-1, n);
}
;
console.log(maxCoins([3, 1, 5, 8]));
