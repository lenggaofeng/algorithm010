"use strict";
/*
 * @lc app=leetcode.cn id=32 lang=typescript
 *
 * [32] 最长有效括号
 */
// @lc code=start
function longestValidParentheses(s) {
    let stack = new Array();
    const n = s.length;
    let max = 0;
    stack.push(-1);
    for (let i = 0; i < n; i++) {
        const c = s[i];
        if (c == ')') {
            stack.pop();
            if (stack.length == 0) {
                stack.push(i);
            }
            else {
                max = Math.max(max, i - stack[stack.length - 1]);
            }
        }
        else {
            stack.push(i);
        }
    }
    return max;
}
;
// @lc code=end
let s = "()(()";
// let s = "))(())))(((((()))))))()())";
console.log(longestValidParentheses(s));
// ))(())))
// (((((())))))
// )()())
