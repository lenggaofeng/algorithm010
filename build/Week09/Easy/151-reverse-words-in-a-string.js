"use strict";
function reverseWords(s) {
    return s.trim().split(/\s+/).reverse().join(" ");
}
;
console.log(reverseWords("the sky is blue"));
