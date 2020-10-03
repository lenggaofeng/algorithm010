"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Test_1 = require("./Test");
function numJewelsInStones(J, S) {
    const JArr = J.split("").sort();
    const SArr = S.split("").sort();
    let i = 0;
    let j = 0;
    let cnt = 0;
    while (i < JArr.length && j < SArr.length) {
        const p = JArr[i];
        while (SArr[j] == p) {
            cnt++;
            j++;
        }
        if (SArr[j] > p) {
            i++;
        }
        else {
            j++;
        }
    }
    return cnt;
}
;
function numJewelsInStonesHash(J, S) {
    const jewelSet = new Set();
    for (let i = 0; i < J.length; i++) {
        jewelSet.add(J[i]);
    }
    let cnt = 0;
    for (let i = 0; i < S.length; i++) {
        if (jewelSet.has(S[i])) {
            cnt++;
        }
    }
    return cnt;
}
const cases = [
    { input: ["aA", "aAAbbbb"], output: 3 },
    { input: ["z", "ZZ"], output: 0 },
    { input: ["z", ""], output: 0 },
];
Test_1.testWithResult(cases, ([J, S]) => numJewelsInStones(J, S));
