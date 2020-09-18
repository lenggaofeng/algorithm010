"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Test_1 = require("./Test");
/**
 *
 * dp[i] = {cost, lastWorth} 为字符串 [0 .. i] 的最小成本及最后字母成本, i <= j;
 *
 * 当 s[i] == s[i - 1] 时:
 *      dp[i].cost += min(dp[i - 1].lastWorth, cost[i]);
 *      dp[i].lastWorth = max(dp[i - 1].lastWorth, cost[i]);
 * 否则:
 *      dp[i].cost = dp[i - 1].cost;
 *      dp[i].lastWorth = cost[i];
 *
 * dp[0] = {cost: 0, lastWorth: cost[0]};
 *
 * 因为每一个状态只依赖前一个状态， 所以可以压缩空间
 */
function minCost(s, cost) {
    if (s.length <= 1) {
        return 0;
    }
    let costTotal = 0;
    let lastWorth = cost[0];
    for (let i = 1, l = s.length; i < l; i++) {
        if (s[i] == s[i - 1]) {
            costTotal += Math.min(lastWorth, cost[i]);
            lastWorth = Math.max(lastWorth, cost[i]);
        }
        else {
            lastWorth = cost[i];
        }
    }
    return costTotal;
}
;
function minCost1(s, cost) {
    let n = s.length;
    let maxCost = 0;
    for (let i = 0; i < n; i++) {
        let c = s[i];
        let max = cost[i];
        while (i < n - 1 && c == s[i + 1]) {
            i++;
            let curCost = cost[i];
            maxCost += Math.min(max, curCost);
            if (curCost > max) {
                max = curCost;
            }
        }
    }
    return maxCost;
}
;
exports.default = null;
const cases = [
    { input: ["abaac", [1, 2, 3, 4, 5]], output: 3 },
    { input: ["abc", [1, 2, 3]], output: 0 },
    { input: ["aabaa", [1, 2, 3, 4, 1]], output: 2 },
    { input: ["aaabbbabbbb", [3, 5, 10, 7, 5, 3, 5, 5, 4, 8, 1]], output: 26 },
];
// testWithResult(cases, ([s, cost]) => minCost1(s, cost), CompBase);
Test_1.testWithResult(cases, ([s, cost]) => minCost(s, cost), Test_1.CompBase);
