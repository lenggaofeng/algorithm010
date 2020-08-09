"use strict";
/*
 * @lc app=leetcode.cn id=336 lang=typescript
 *
 * [336] 回文对
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = null;
// @lc code=start
function palindromePairs(words) {
    const n = words.length;
    function checkIsPalindrome(i, j) {
        let s = words[i] + words[j];
        let len = s.length;
        for (let i = 0, l = s.length >> 1; i < l; i++) {
            if (s[i] != s[len - i - 1]) {
                return false;
            }
        }
        return true;
    }
    let results = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i == j) {
                continue;
            }
            if (checkIsPalindrome(i, j)) {
                results.push([i, j]);
            }
        }
    }
    return results;
}
;
// @lc code=end
// console.log(palindromePairs(["abcd","dcba","lls","s","sssll"]))
console.log(palindromePairs(["ab", "ba", "abc", "cba"]));
