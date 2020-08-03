"use strict";
/**
 *
 * https://leetcode-cn.com/problems/add-strings/
 *
 */
let code0 = "0".charCodeAt(0);
let num2Str = new Array(10);
for (let i = 0; i < 10; i++) {
    num2Str[i] = String.fromCharCode(code0 + i);
}
function addStrings(num1, num2) {
    if (num1.length > num2.length) {
        let tmp = num1;
        num1 = num2;
        num2 = tmp;
    }
    let m = num1.length;
    let n = num2.length;
    let results = new Array(n);
    let pre = 0;
    for (let i = 0; i < n; i++) {
        let n1 = i < m ? num1[m - i - 1].charCodeAt(0) - code0 : 0;
        let n2 = num2[n - i - 1].charCodeAt(0) - code0;
        let sum = n1 + n2 + pre;
        if (sum >= 10) {
            sum -= 10;
            pre = 1;
        }
        else {
            pre = 0;
        }
        results[i] = num2Str[sum];
    }
    if (pre) {
        results.push("1");
    }
    return results.reverse().join("");
}
;
