"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = null;
function getLongestPalindromePrefixLengthWithManacher(s) {
    s = "$" + s.split("").map(v => "#" + v).join("") + "#!";
    const n = s.length;
    const dp = new Array(n).fill(1);
    let maxRight = 0;
    let mid = 0;
    let maxPrefixLen = 1;
    for (let i = 1; i < n; i++) {
        let len = i > maxRight ? 1 : Math.min(maxRight - i + 1, dp[2 * mid - i]);
        while (s[i + len] == s[i - len]) {
            len++;
        }
        dp[i] = len;
        if (i + len - 1 > maxRight) {
            maxRight = i + len - 1;
            mid = i;
        }
        if (i == len) {
            maxPrefixLen = i - 1;
        }
    }
    return maxPrefixLen;
}
function shortestPalindrome(s) {
    const prefixLen = getLongestPalindromePrefixLengthWithManacher(s);
    if (prefixLen == s.length) {
        return s;
    }
    const supply = s.slice(prefixLen).split("").reverse().join("");
    return supply + s;
}
;
var s = "aacecaaa";
// var s = "aba";
// var s = "abcd";
// console.log(getLongestPalindromePrefixLength(s));
console.log(shortestPalindrome(s));
