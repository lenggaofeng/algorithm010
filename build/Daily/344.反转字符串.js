"use strict";
/*
 * @lc app=leetcode.cn id=344 lang=typescript
 *
 * [344] 反转字符串
 */
// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
    let n = s.length;
    let mid = n / 2;
    for (let i = 0; i < mid; i++) {
        let j = n - i - 1;
        let temp = s[j];
        s[j] = s[i];
        s[i] = temp;
    }
}
;
// @lc code=end
