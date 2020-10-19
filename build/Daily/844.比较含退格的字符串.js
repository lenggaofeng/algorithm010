"use strict";
/*
 * @lc app=leetcode.cn id=844 lang=typescript
 *
 * [844] 比较含退格的字符串
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Test_1 = require("./Test");
// @lc code=start
function backspace(S) {
    let results = S.split("");
    let bt = 0;
    for (let i = S.length - 1; i >= 0; i--) {
        if (S[i] == "#") {
            bt++;
            results[i] = "";
        }
        else if (bt > 0) {
            results[i] = "";
            bt--;
        }
    }
    return results.filter(v => !!v).join("");
}
function backspaceCompare(S, T) {
    return backspace(S) == backspace(T);
}
;
// @lc code=end
const cases = [
    { input: ["ab#c", "ad#c"], output: true },
    { input: ["ab##", "c#d#"], output: true },
    { input: ["a##c", "#a#c"], output: true },
    { input: ["a#c", "b"], output: false },
    { input: ["xywrrmp", "xywrrmu#p"], output: true },
];
Test_1.testWithResult(cases, ([S, T]) => backspaceCompare(S, T));
