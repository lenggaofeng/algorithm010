"use strict";
/*
 * @lc app=leetcode.cn id=1207 lang=typescript
 *
 * [1207] 独一无二的出现次数
 */
// @lc code=start
function uniqueOccurrences(arr) {
    const times = new Map();
    arr.forEach(v => {
        times.set(v, (times.get(v) || 0) + 1);
    });
    let timesSet = new Set();
    const timesArr = [...times.values()];
    for (let i = 0; i < timesArr.length; i++) {
        if (timesSet.has(timesArr[i])) {
            return false;
        }
        timesSet.add(timesArr[i]);
    }
    return true;
}
;
// @lc code=end
