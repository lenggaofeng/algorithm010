"use strict";
/**
 * https://leetcode-cn.com/problems/power-of-two/
 */
function isPowerOfTwo(n) {
    return (n & n - 1) == 0;
}
;
