"use strict";
/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */
// @lc code=start
function isValid(s) {
    let stack = new Array();
    let n = s.length;
    for (let i = 0; i < n; i++) {
        let c = s[i];
        let need = "";
        switch (c) {
            case "(":
            case "{":
            case "[":
                stack.push(c);
                break;
            case ")":
                need = "(";
                break;
            case "}":
                need = "{";
                break;
            case "]":
                need = "[";
                break;
        }
        if (need) {
            const top = stack.pop();
            if (top !== need) {
                return false;
            }
        }
    }
    return stack.length == 0;
}
;
// @lc code=end
console.log(isValid("()"));
