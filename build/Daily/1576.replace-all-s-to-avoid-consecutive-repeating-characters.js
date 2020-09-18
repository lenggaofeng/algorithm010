"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Test_1 = require("./Test");
exports.default = null;
let arr = "abcdefg".split("");
function modifyString(s) {
    function getChar(need, next) {
        if (need == next) {
            need = (need + 1) % arr.length;
        }
        return arr[need];
    }
    let l = s.length;
    const result = new Array(l);
    let need = 0;
    const base = "a".charCodeAt(0);
    for (let i = 0; i < l; i++) {
        const nextc = i == l - 1 ? "a" : s[i + 1];
        let next = nextc == "?" ? 0 : nextc.charCodeAt(0) - base;
        if (s[i] == "?") {
            result[i] = getChar(need, next);
        }
        else {
            result[i] = s[i];
        }
        need = (result[i].charCodeAt(0) - base + 1) % arr.length;
    }
    return result.join("");
}
;
Test_1.testWithCheck([
    "a?b",
    "?zs",
    "ubv?w",
    "j?qg??b",
    "??yw?ipkj?",
], modifyString, (s) => {
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] == s[i + 1]) {
            return false;
        }
    }
    return true;
});
