"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = null;
function isPowerOfTwo(n) {
    return n > 0 && (n & n - 1) == 0;
}
;
console.log(isPowerOfTwo(8));
