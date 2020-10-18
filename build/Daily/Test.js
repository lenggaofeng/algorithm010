"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testWithCheck = exports.testWithResult = exports.getCompArr = exports.CompBase = void 0;
function CompBase(a, b) {
    return a === b;
}
exports.CompBase = CompBase;
function getCompArr(comp, sort) {
    return (a, b) => {
        if (a.length != b.length) {
            return false;
        }
        if (sort) {
            sort(a);
            sort(b);
        }
        return a.every((v, i) => {
            return comp(b[i], v);
        });
    };
}
exports.getCompArr = getCompArr;
function testWithResult(cases, func, comp = CompBase) {
    const flag = cases.every((v, i) => {
        const result = func(v.input);
        const flag = comp(result, v.output);
        if (!flag) {
            console.log(`case failed: ${i}/${cases.length}`, v, "result:", result);
        }
        return flag;
    });
    if (flag) {
        console.log("all cases passed");
    }
    return flag;
}
exports.testWithResult = testWithResult;
function testWithCheck(cases, func, check) {
    const flag = cases.every((v, i) => {
        const result = func(v);
        const flag = check(result);
        if (!flag) {
            console.log(`case failed: ${i}/${cases.length}`, v, "result:", result);
        }
        return flag;
    });
    if (flag) {
        console.log("all cases passed");
    }
    return flag;
}
exports.testWithCheck = testWithCheck;
