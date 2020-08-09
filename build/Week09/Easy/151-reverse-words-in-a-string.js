"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = null;
function reverseWords(s) {
    return s.trim().split(/\s+/).reverse().join(" ");
}
;
console.log(reverseWords("the sky is blue"));
