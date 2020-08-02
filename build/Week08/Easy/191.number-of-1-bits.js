"use strict";
/**
 * https://leetcode-cn.com/problems/number-of-1-bits/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = null;
function hammingWeight(n) {
    let cnt = 0;
    while (n) {
        n = n & n - 1;
        cnt++;
    }
    return cnt;
}
// console.log(hammingWeight(67))
