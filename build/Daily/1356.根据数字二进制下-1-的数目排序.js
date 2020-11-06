"use strict";
/*
 * @lc app=leetcode.cn id=1356 lang=typescript
 *
 * [1356] 根据数字二进制下 1 的数目排序
 */
// @lc code=start
function countOne(num) {
    let cnt = 0;
    while (num) {
        cnt++;
        num = num & (num - 1);
    }
    return cnt;
}
function sortByBits(arr) {
    const num2Cnt = new Map();
    arr.forEach(v => {
        num2Cnt.set(v, countOne(v));
    });
    arr.sort((a, b) => {
        return num2Cnt.get(a) - num2Cnt.get(b) || a - b;
    });
    return arr;
}
;
// @lc code=end
