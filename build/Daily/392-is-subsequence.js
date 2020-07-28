"use strict";
/**
 * https://leetcode-cn.com/problems/is-subsequence/
 */
function isSubsequence(s, t) {
    let i = 0, j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] == t[j]) {
            i++;
        }
        j++;
    }
    return i == s.length;
}
;
console.log(isSubsequence("abc", "ahbgdc"));
