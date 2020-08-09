"use strict";
let codeA = "A".charCodeAt(0);
let codeZ = "Z".charCodeAt(0);
let codea = "a".charCodeAt(0);
let codez = "z".charCodeAt(0);
function isChar(c) {
    let code = c.charCodeAt(0);
    return (code >= codeA && code <= codeZ)
        || (code >= codea && code <= codez);
}
function reverseOnlyLetters(S) {
    let start = 0;
    let end = S.length - 1;
    const arr = S.split("");
    while (start < end) {
        let cs, ce;
        while (start < end) {
            cs = S[start];
            if (isChar(cs)) {
                break;
            }
            start++;
        }
        while (end > start) {
            ce = S[end];
            if (isChar(ce)) {
                break;
            }
            end--;
        }
        if (!isChar(cs) || !isChar(ce)) {
            break;
        }
        arr[start++] = ce;
        arr[end--] = cs;
    }
    return arr.join("");
}
;
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));
