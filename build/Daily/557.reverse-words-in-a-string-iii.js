"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = null;
function reverseWords(s) {
    return s.split(" ").map(v => v.split("").reverse().join("")).join(" ");
}
;
console.log(reverseWords("Let's take LeetCode contest"));
