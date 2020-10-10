"use strict";
/*
 * @lc app=leetcode.cn id=6 lang=typescript
 *
 * [6] Z 字形变换
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Test_1 = require("./Test");
// @lc code=start
function convert(s, numRows) {
    numRows = Math.min(numRows, s.length);
    if (numRows <= 1) {
        return s;
    }
    const results = new Array(numRows).fill("");
    let goDown = false;
    let curRow = 0;
    for (let i = 0; i < s.length; i++) {
        results[curRow] += s[i];
        if (curRow == 0 || curRow == numRows - 1) {
            goDown = !goDown;
        }
        curRow += goDown ? 1 : -1;
    }
    return results.join("");
}
;
// @lc code=end
const cases = [
    { input: ["LEETCODEISHIRING", 3], output: "LCIRETOESIIGEDHN" },
    { input: ["LEETCODEISHIRING", 4], output: "LDREOEIIECIHNTSG" },
    { input: ["AB", 1], output: "AB" },
];
Test_1.testWithResult(cases, ([s, numRows]) => convert(s, numRows));
