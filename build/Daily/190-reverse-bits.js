"use strict";
/**
 * https://leetcode-cn.com/problems/reverse-bits/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = null;
function reverseBits(n) {
    let result = 0;
    let mask = 1;
    let template = 1 << 31;
    for (let i = 0; i < 32; i++) {
        if ((n & mask) != 0) {
            result |= template;
        }
        mask = mask << 1;
        template >>>= 1;
    }
    return result;
}
console.log(reverseBits(0b11111111111111111111111111111101));
