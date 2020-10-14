"use strict";
/*
 * @lc app=leetcode.cn id=1002 lang=typescript
 *
 * [1002] 查找常用字符
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Test_1 = require("./Test");
exports.default = null;
// @lc code=start
const codeA = 'a'.charCodeAt(0);
function commonChars(A) {
    if (A.length == 0) {
        return [];
    }
    let commonChars = new Array(26).fill(0);
    for (let i = 0; i < A[0].length; i++) {
        const c = A[0][i].charCodeAt(0) - codeA;
        commonChars[c]++;
    }
    let tempCommon = new Array(26);
    for (let i = 1; i < A.length; i++) {
        tempCommon.fill(0);
        const s = A[i];
        for (let i = 0; i < s.length; i++) {
            const c = s[i].charCodeAt(0) - codeA;
            if (commonChars[c] > 0) {
                commonChars[c]--;
                tempCommon[c]++;
            }
        }
        let temp = commonChars;
        commonChars = tempCommon;
        tempCommon = temp;
    }
    let result = [];
    commonChars.forEach((cnt, i) => {
        const c = String.fromCharCode(codeA + i);
        for (let i = 0; i < cnt; i++) {
            result.push(c);
        }
    });
    return result;
}
;
// @lc code=end
const cases = [
    { input: ["bella", "label", "roller"], output: ["e", "l", "l"] },
    { input: ["cool", "lock", "cook"], output: ["c", "o"] },
];
Test_1.testWithResult(cases, commonChars, Test_1.getCompArr(Test_1.CompBase));
