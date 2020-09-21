/*
 * @lc app=leetcode.cn id=134 lang=typescript
 *
 * [134] 加油站
 */

// @lc code=start
function canCompleteCircuit(gas: number[], cost: number[]): number {
    const n = gas.length;
    let totalGas = 0;
    let curGas = 0;
    let start = 0;
    for (let i = 0; i < n; i++){
        let left = gas[i] - cost[i];
        totalGas += left;
        curGas += left;
        if (curGas < 0) {
            start = i + 1;
            curGas = 0;
        }
    }
    return totalGas >= 0 ? start : -1;
};
// @lc code=end

